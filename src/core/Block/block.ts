import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';

import EventBus from '../EventBus/eventBus';
import isEqual from '../../utils/isEqual';

class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  protected props: P;

  public children: Record<string, Block | Block[]>;

  private eventBus: () => EventBus;

  private _element: HTMLElement | null = null;

  private _eventListenerController: null | AbortController = null;

  constructor(propsWithChildren?: P) {
    const eventBus = new EventBus();


    if (propsWithChildren) {
      const {children, props} = this._getChildrenAndProps(propsWithChildren);
      this.children = children;
      this.props = this._makePropsProxy({ ...props, __id: this.id });
    } else {
      this.children = {};
      this.props = this._makePropsProxy({ __id: this.id } as any as P);
    }


    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: P)
    : { props: P, children: Record<string, Block | Block[]> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else if (Array.isArray(value) && value[0] instanceof Block) {
        children[key as string] = value as Block[];
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _removeEvents() {
    if (this._eventListenerController) {
      this._eventListenerController.abort();
    }
  }

  _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    this._eventListenerController = new AbortController();

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName], {
        signal: this._eventListenerController!.signal,
      });
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, (isInit) => this._render.bind(this)(isInit));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, true);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => item.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    return !isEqual(oldProps, newProps);
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render(isInit = false) {
    const fragment = this.render();

    this._removeEvents();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this.props.class) {
      newElement.classList.add(this.props.class);
    }

    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();

    if (isInit) {
      this.dispatchComponentDidMount();
    }
  }

  protected compile(template: string, context: Record<string, any>) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map((item) => `<div data-id="${item.id}"></div>`).join('');
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      const replaceStub = (comp: Block) => {
        const stub = temp.content.querySelector(`[data-id="${comp.id}"]`);

        if (!stub) {
          return;
        }

        comp.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(comp.getContent()!);
      };

      if (Array.isArray(component)) {
        component.forEach((item) => replaceStub(item));
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this.id);
    return element;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;

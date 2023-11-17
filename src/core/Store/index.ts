import { IUser } from "../../api/authApi";
import set from "../../utils/set";
import Block from "../Block/block";
import EventBus from "../EventBus/eventBus";

export interface IState {
  user?: IUser;
  chats?: any[];
  chatId?: string;
  chatToken?: string;
  messages?: string[];
}

export enum StoreEvents {
  Update = 'updated'
}

class Store extends EventBus {
  private state: IState = {};

  constructor() {
    super();
  }

  getState(): IState {
    return this.state;
  }

  setState(path: string, value: unknown): void {
    set(this.state, path, value);

    this.emit(StoreEvents.Update, this.getState());
  }
}

const store = new Store();
export default store;

export const withStore = (
  mapStateToProps: (data: IState) => any
) => {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(propsWithChildren: any) {
        super({...propsWithChildren, ...mapStateToProps(store.getState())});

        store.on(StoreEvents.Update, () => {
          const newProps = mapStateToProps(store.getState())

          this.setProps(newProps);
        })
      }
    }
  }
};

import Block from '../../utils/block';
import tmpl from './NotFound.tmpl';
import classes from './NotFound.module.scss';
import Link from '../../components/Link';

class NotFound extends Block {
  constructor() {
    super('div', {
      class: classes.registration,
    });
  }

  init(): void {
    this.children.link = new Link({
      href: '/chat',
      text: 'Назад к чатам',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default NotFound;

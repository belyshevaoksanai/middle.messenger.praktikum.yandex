import Block from '../../core/Block/block';
import tmpl from './NotFound.tmpl';
import classes from './NotFound.module.scss';
import Link from '../../components/Link';
import Routes from '../../enum/routes';

class NotFound extends Block {
  constructor() {
    super({
      class: classes.registration,
    });
  }

  init(): void {
    this.children.link = new Link({
      href: Routes.Chat,
      text: 'Назад к чатам',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default NotFound;

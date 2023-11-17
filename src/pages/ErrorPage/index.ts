import tmpl from './ErrorPage.tmpl';
import classes from './ErrorPage.module.scss';
import Link from '../../components/Link';
import Block from '../../core/Block/block';

class ErrorPage extends Block {
  constructor() {
    super({
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

export default ErrorPage;

import tmpl from './errorPage.tmpl';
import classes from './errorPage.module.scss';
import Link from '../../components/Link';
import Block from '../../utils/block';

class ErrorPage extends Block {
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

export default ErrorPage;

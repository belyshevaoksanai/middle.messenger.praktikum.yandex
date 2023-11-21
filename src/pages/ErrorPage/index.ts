import tmpl from './ErrorPage.tmpl';
import classes from './ErrorPage.module.scss';
import Link from '../../components/Link';
import Block from '../../core/Block/block';
import Routes from '../../enum/routes';

class ErrorPage extends Block {
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

export default ErrorPage;

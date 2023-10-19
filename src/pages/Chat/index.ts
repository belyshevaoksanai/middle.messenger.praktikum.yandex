import tmpl from './chat.tmpl';
import classes from './chat.module.scss';
import arrowUrl from '../../assets/icons/arrow-right.svg';
import Block from '../../utils/block';
import Link from '../../components/Link';
import Input from '../../components/Input';
import CHAT_DATA from './mock';
import { DialogItem } from '../../components/DialogItem';
import ChatForm from './ChatForm';

export class Chat extends Block {
  constructor() {
    super('div', {
      class: classes.chatPage,
    });
  }

  init(): void {
    this.children.linkProfile = new Link({
      text: 'Профиль',
      to: '/profile',
    });
    this.children.inputSearch = new Input({
      variant: 'filled',
      name: 'search',
    });
    this.children.chatDialogs = CHAT_DATA.map((chat) => new DialogItem(chat));
    this.children.form = new ChatForm();
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, arrowUrl), this.props);
  }
}

export default Chat;

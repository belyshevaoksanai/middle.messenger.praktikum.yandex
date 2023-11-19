import tmpl from './Chat.tmpl';
import classes from './Chat.module.scss';
import arrowUrl from '../../assets/icons/arrow-right.svg';
import Block from '../../core/Block/block';
import Link from '../../components/Link';
import Input from '../../components/Input';
import { DialogItem } from '../../components/DialogItem';
import ChatForm from './ChatForm';
import ChatController from '../../controllers/chatController';
import Button from '../../components/Button';
import CreateDailog from './CreateDailog';
import store, { IState, StoreEvents } from '../../core/Store';
import WSTransport, { WSTransportEvents } from '../../core/WsTransport/wsTransport';
import AddUserDailog from './AddUserDialog';
import Message from './Message';
import RemoveUserDailog from './RemoveUserDialog';
import withStore from '../../core/Store/withStore';
import Routes from '../../enum/routes';

class Chat extends Block {
  ws: WSTransport | undefined;

  chatToken: string = '';

  constructor() {
    super({
      class: classes.chatPage,
      activeDialog: null,
    });
  }

  init(): void {
    this.children.linkProfile = new Link({
      text: 'Профиль',
      href: Routes.Profile,
    });
    this.children.inputSearch = new Input({
      variant: 'filled',
      name: 'search',
    });
    this.children.form = new ChatForm({
      submit: (values: any) => {
        this.ws?.send({
          type: 'message',
          content: values.message,
        });
      },
    });
    this.children.createDialog = new CreateDailog({
      isShow: false,
    });
    this.children.addUserDialog = new AddUserDailog({
      isShow: false,
    });
    this.children.removeUserDialog = new RemoveUserDailog({
      isShow: false,
    });
    this.children.createChatButton = new Button({
      variant: 'filled',
      label: 'Создать чат',
      events: {
        click: () => {
          (this.children.createDialog as Block).setProps({
            isShow: true,
          });
        },
      },
    });
    this.children.addUserButton = new Button({
      variant: 'filled',
      label: 'Добавить пользователя',
      events: {
        click: () => {
          (this.children.addUserDialog as Block).setProps({
            isShow: true,
          });
        },
      },
      disabled: true,
    });

    this.children.removeUserButton = new Button({
      variant: 'filled',
      label: 'Удалить пользователя',
      events: {
        click: () => {
          (this.children.removeUserDialog as Block).setProps({
            isShow: true,
          });
        },
      },
      disabled: true,
    });
  }

  chatConnect(id: string): void {
    store.setState('messages', []);
    store.on(StoreEvents.Update, (value: IState) => {
      if (value.chatToken && value.chatToken !== this.chatToken) {
        this.chatToken = value.chatToken;
        if (this.ws) {
          this.ws.close();
        }
        this.ws = new WSTransport(`/chats/${value.user?.id}/${id}/${value.chatToken}`);
        this.ws.connected().then(() => {
          this.ws?.send({
            content: '0',
            type: 'get old',
          });
        }).catch((e) => {
          console.log(e);
        });
        this.ws.on(WSTransportEvents.Message, (message) => {
          if (Array.isArray(message)) {
            store.setState('messages', message.reverse());
          } else {
            store.setState('messages', (store.getState().messages || [])?.concat(message));
          }
        });
      }
    });

    ChatController.getChatToken(id);
  }

  protected componentDidMount(): void {
    store.on(StoreEvents.Update, (value: IState) => {
      if (value.chats) {
        this.children.chatDialogs = value.chats?.map((chat, i) => new DialogItem({
          ...chat,
          active: chat.id === this.props.activeDialog,
          events: {
            click: () => {
              this.setProps({ activeDialog: chat.id });
              (this.children.chatDialogs as Block[])[i].setProps({
                active: true,
              });
              (this.children.addUserButton as Block).setProps({
                disabled: false,
              });
              (this.children.removeUserButton as Block).setProps({
                disabled: false,
              });
              store.setState('chatId', chat.id);
              this.chatConnect(chat.id);
            },
          },
        }));
      }

      if (value.messages) {
        this.children.messages = value.messages?.map((message: any) => (
          new Message({
            text: message.content,
            isCurrentUser: message.user_id === this.props.user.id,
          })));
        const timeoutId = setTimeout(() => {
          if (window.document.getElementById('chatsList')
            && window.document.getElementById('chatsList')?.scrollHeight) {
            window.document.getElementById('chatsList')?.scrollTo({
              top: window.document.getElementById('chatsList')?.scrollHeight,
            });
          }
          clearTimeout(timeoutId);
        });
      }
    });
    ChatController.getChats();
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, arrowUrl), this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  chats: state.chats,
  chatToken: state.chatToken,
  user: state.user,
  messages: state.messages,
});

export default withStore(mapStateToProps)(Chat);

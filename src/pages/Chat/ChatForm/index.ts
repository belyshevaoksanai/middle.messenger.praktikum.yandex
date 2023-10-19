import tmpl from './chat.tmpl'
import classes from './chat.module.scss';
import Input from '../../../components/Input';
import IconButton from '../../../components/IconButton';
import sendIcon from '../../../assets/icons/arrow-right-2.svg';
import Form from '../../../components/Form';

class ChatForm extends Form {
  constructor() {
    super('form', {
      class: classes.messageContainer,
      events: {
        submit: (event: any) => {
          event.preventDefault();

          this.markAllAsTouched();

          if (this.check()) {
            const formData = new FormData(this.element as HTMLFormElement);
            const values = Object.fromEntries(formData);
            console.log('form value:');
            console.log(values);
          }
        },
      },
    });
  }

  init(): void {
    this.children.inputMessage = new Input({
      name: 'message',
      variant: 'filled',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Пустое сообщение'),
    });
    this.children.buttonSend = new IconButton({
      iconUrl: sendIcon,
      type: 'submit',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default ChatForm;

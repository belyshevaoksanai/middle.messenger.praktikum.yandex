import tmpl from './chat.tmpl';
import Block from '../../../utils/block';
import classes from './chat.module.scss';
import Input from '../../../components/Input';
import IconButton from '../../../components/IconButton';
import sendIcon from '../../../assets/icons/arrow-right-2.svg';

class ChatForm extends Block {
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

  markAllAsTouched(): void {
    const input = ((this.children.inputMessage as Block).children.input as Block).element;
    input!.dispatchEvent(new Event('blur'));
  }

  check(): boolean {
    return (this.children.inputMessage as any).isValid;
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

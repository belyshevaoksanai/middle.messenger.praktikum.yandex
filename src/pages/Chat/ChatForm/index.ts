import tmpl from './ChatForm.tmpl';
import classes from './ChatForm.module.scss';
import Input from '../../../components/Input';
import IconButton from '../../../components/IconButton';
import sendIcon from '../../../assets/icons/arrow-right-2.svg';
import Form from '../../../components/Form';
import { required } from '../../../utils/validate';
import ChatFormModel from './ChatForm.model';

class ChatForm extends Form {
  init(): void {
    this.children.inputMessage = new Input({
      name: 'message',
      variant: 'filled',
      validate: required,
    });
    this.children.buttonSend = new IconButton({
      iconUrl: sendIcon,
      type: 'submit',
    });
  }

  submit(values: ChatFormModel): void {
    console.log('form value:');
    console.log(values);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default ChatForm;

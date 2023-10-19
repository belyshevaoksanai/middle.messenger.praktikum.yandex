import classes from './password2.module.scss';
import Block from '../../utils/block';
import PasswordForm from './PasswordForm';

class Password extends Block {
  constructor() {
    super('div', {
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new PasswordForm();
  }

  protected render(): DocumentFragment {
    return this.compile('{{{form}}}', this.props);
  }
}

export default Password;

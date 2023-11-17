import classes from './Password.module.scss';
import Block from '../../core/Block/block';
import PasswordForm from './PasswordForm';

class Password extends Block {
  constructor() {
    super({
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new PasswordForm({});
  }

  protected render(): DocumentFragment {
    return this.compile('<div class="{{class}}">{{{form}}}<div>', this.props);
  }
}

export default Password;

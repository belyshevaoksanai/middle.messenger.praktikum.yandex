import Block from '../../core/Block/block';
import classes from './Registration.module.scss';
import RegistrationForm from './RegistrationForm';

class Registration extends Block {
  constructor() {
    super({
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new RegistrationForm({});
  }

  protected render(): DocumentFragment {
    return this.compile(`<div class="{{class}}"><div class="${classes.registrationContainer}">{{{form}}}</div></div>`, this.props);
  }
}

export default Registration;

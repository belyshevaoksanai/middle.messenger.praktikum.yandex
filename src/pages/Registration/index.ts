import Block from '../../utils/block';
import classes from './Registration2.module.scss';
import RegistrationForm from './RegistrationForm';

class Registration extends Block {
  constructor() {
    super('div', {
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new RegistrationForm();
  }

  protected render(): DocumentFragment {
    return this.compile(`<div class="${classes.registrationContainer}">{{{form}}}</div>`, this.props);
  }
}

export default Registration;

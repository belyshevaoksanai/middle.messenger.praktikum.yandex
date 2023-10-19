import Block from '../../utils/block';
import classes from './login2.module.scss';
import LoginForm from './LoginForm';

class Login extends Block {
  constructor() {
    super('div', {
      class: classes.login,
    });
  }

  init(): void {
    this.children.form = new LoginForm();
  }

  protected render(): DocumentFragment {
    return this.compile(`<div class="${classes.loginContainer}">{{{form}}}</div>`, this.props);
  }
}

export default Login;

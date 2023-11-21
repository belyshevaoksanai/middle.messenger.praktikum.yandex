import Block from '../../core/Block/block';
import classes from './Login.module.scss';
import LoginForm from './LoginForm';

class Login extends Block {
  constructor() {
    super({
      class: classes.login,
    });
  }

  init(): void {
    this.children.form = new LoginForm({});
  }

  protected render(): DocumentFragment {
    return this.compile(`<div class="{{class}}"><div class="${classes.loginContainer}">{{{form}}}</div></div>`, this.props);
  }
}

export default Login;

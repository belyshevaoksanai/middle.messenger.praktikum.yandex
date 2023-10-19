import tmpl from './login.tmpl';
import classes from './login.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import Form from '../../../components/Form';
import { required } from '../../../utils/validate';

class LoginForm extends Form {
  init(): void {
    this.children.title = new Title({ text: 'Вход' });
    this.children.inputLogin = new Input({
      label: 'Логин',
      name: 'login',
      validate: required,
    });
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
      validate: required,
    });
    this.children.buttonAuth = new Button({
      label: 'Авторизоваться',
    });
    this.children.buttonRegistration = new LinkButton({
      label: 'Нет аккаунта?',
      variant: 'text',
      href: '/registration',
    });
  }

  submit(values: any): void {
    console.log('form value:');
    console.log(values);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default LoginForm;

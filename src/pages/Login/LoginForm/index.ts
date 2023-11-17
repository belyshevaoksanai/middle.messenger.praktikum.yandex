import tmpl from './LoginForm.tmpl';
import classes from './LoginForm.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import { required } from '../../../utils/validate';
import AuthController from '../../../controllers/authController';
import { ISigninData } from '../../../api/authApi';
import router from '../../../core/Router/router';
import { Routes } from '../../..';

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
      type: 'password',
      validate: required,
    });
    this.children.buttonAuth = new Button({
      label: 'Авторизоваться',
    });
    this.children.buttonRegistration = new Button({
      label: 'Нет аккаунта?',
      variant: 'text',
      type: 'button',
      events: {
        click: () => {
          router.go(Routes.Register);
        },
      },
    });
  }

  submit(values: ISigninData): void {
    AuthController.signin(values);
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

export default LoginForm;

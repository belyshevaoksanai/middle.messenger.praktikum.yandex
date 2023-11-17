import tmpl from './RegistrationForm';
import classes from './RegistrationForm.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import {
  required, validateEmail, validateLogin, validateName, validatePassword, validatePhone,
} from '../../../utils/validate';
import AuthController from '../../../controllers/authController';
import { ISignupData } from '../../../api/authApi';
import router from '../../../core/Router/router';
import { Routes } from '../../..';

class RegistrationForm extends Form {
  init(): void {
    this.children.title = new Title({ text: 'Регистрация' });
    this.children.inputLogin = new Input({
      label: 'Логин',
      name: 'login',
      validate: validateLogin,
    });
    this.children.inputEmail = new Input({
      label: 'Почта',
      name: 'email',
      validate: validateEmail,
    });
    this.children.inputName = new Input({
      label: 'Имя',
      name: 'first_name',
      validate: validateName,
    });
    this.children.inputSecondName = new Input({
      label: 'Фамилия',
      name: 'second_name',
      validate: validateName,
    });
    this.children.inputPhone = new Input({
      label: 'Телефон',
      name: 'phone',
      validate: validatePhone,
    });
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
      type: 'password',
      validate: validatePassword,
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Пароль (ещё раз)',
      name: 'confirmPassword',
      type: 'password',
      validate: required,
    });
    this.children.buttonRegistration = new Button({
      label: 'Зарегистрироваться',
    });
    this.children.buttonSignIn = new Button({
      label: 'Войти',
      variant: 'text',
      type: 'button',
      events: {
        click: () => {
          router.go(Routes.Login);
        }
      }
    });
  }

  submit(values: ISignupData): void {
    AuthController.signup(values);
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

export default RegistrationForm;

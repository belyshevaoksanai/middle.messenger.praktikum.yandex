import tmpl from './registration';
import classes from './registration.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import Form from '../../../components/Form';
import {
  required, validateLogin, validateName, validatePassword, validatePhone,
} from '../../../utils/validate';

class RegistrationForm extends Form {
  init(): void {
    this.children.title = new Title({ text: 'Регистрация' });
    this.children.inputLogin = new Input({
      label: 'Логин',
      name: 'login',
      validate: validateLogin,
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
      validate: validatePassword,
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Пароль (ещё раз)',
      name: 'confirmPassword',
      validate: required,
    });
    this.children.buttonRegistration = new Button({
      label: 'Зарегистрироваться',
    });
    this.children.buttonSignIn = new LinkButton({
      label: 'Войти',
      variant: 'text',
      href: '/login',
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

export default RegistrationForm;

import tmpl from './registration';
import classes from './registration.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import Form from '../../../components/Form';

class RegistrationForm extends Form {
  constructor() {
    super('form', {
      class: classes.registrationContainer,
      events: {
        submit: (event: any) => {
          event.preventDefault();

          this.markAllAsTouched();

          if (this.check()) {
            const formData = new FormData(this.element as HTMLFormElement);
            const values = Object.fromEntries(formData);
            console.log('form value:');
            console.log(values);
          }
        },
      },
    });
  }

  init(): void {
    this.children.title = new Title({ text: 'Регистрация' });
    this.children.inputLogin = new Input({
      label: 'Логин',
      name: 'login',
      validate: (value: string) => {
        const regexp = /^[\da-zA-Z_-]*[a-zA-Z][\da-zA-Z_-]*$/;
        return regexp.test(value) && value.length >= 3 && value.length <= 20
          ? ''
          : 'Длина логина от 3 до 20 символов. Допустимые символы: латиница, цифры, дефис и нижнее подчёркивание. Должен содержать хотя бы одну букву';
      },
    });
    this.children.inputName = new Input({
      label: 'Имя',
      name: 'first_name',
      validate: (value: string) => {
        const regexp = /^[A-ZА-Я][a-zA-Zа-я-А-Я-]*$/;
        return regexp.test(value)
          ? ''
          : 'Допустимые символы: латиница, кириллица, дефис. Первая буква должна быть заглавной.';
      },
    });
    this.children.inputSecondName = new Input({
      label: 'Фамилия',
      name: 'second_name',
      validate: (value: string) => {
        const regexp = /^[A-ZА-Я][a-zA-Zа-я-А-Я-]*$/;
        return regexp.test(value)
          ? ''
          : 'Допустимые символы: латиница, кириллица, дефис. Первая буква должна быть заглавной.';
      },
    });
    this.children.inputPhone = new Input({
      label: 'Телефон',
      name: 'phone',
      validate: (value: string) => {
        const regexp = /^(\+)?[\d]{10,15}$/;
        return regexp.test(value)
          ? ''
          : 'Номер телефона должен содержать от 10 до 15 цифр';
      },
    });
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
      validate: (value: string) => {
        const regexp = /^.*(([A-Z].*[\d])|([\d].*[A-Z])).*$/;
        return regexp.test(value)
          ? ''
          : 'Длина пароля от 8 до 40 символов. Обязательно должен сдержать заглавную букву и цифру.';
      },
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Пароль (ещё раз)',
      name: 'confirmPassword',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Обязательное для заполнения'),
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

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default RegistrationForm;

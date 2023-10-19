import tmpl from './registration';
import Block from '../../../utils/block';
import classes from './registration.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';

class RegistrationForm extends Block {
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

  markAllAsTouched(): void {
    const input = ((this.children.inputLogin as Block).children.input as Block).element;
    input!.dispatchEvent(new Event('blur'));
    const input2 = ((this.children.inputPassword as Block).children.input as Block).element;
    input2!.dispatchEvent(new Event('blur'));
  }

  check(): boolean {
    return (this.children.inputLogin as any).isValid
      && (this.children.inputPassword as any).isValid;
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
    });
    this.children.inputSecondName = new Input({
      label: 'Фамилия',
      name: 'second_name',
    });
    this.children.inputPhone = new Input({
      label: 'Телефон',
      name: 'phone',
    });
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Пароль (ещё раз)',
      name: 'confirmPassword',
    });
    this.children.buttonRegistration = new Button({
      label: 'Зарегистрироваться',
    });
    this.children.buttonSignIn = new LinkButton({
      label: 'Войти',
      variant: 'text',
      to: '/login',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default RegistrationForm;

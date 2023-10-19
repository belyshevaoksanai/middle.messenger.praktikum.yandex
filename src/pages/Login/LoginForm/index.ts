import tmpl from './login.tmpl';
import Block from '../../../utils/block';
import classes from './login.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';

class LoginForm extends Block {
  constructor() {
    super('form', {
      class: classes.loginContainer,
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
    this.children.title = new Title({ text: 'Вход' });
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
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
    });
    this.children.buttonAuth = new Button({
      label: 'Авторизоваться',
    });
    this.children.buttonRegistration = new LinkButton({
      label: 'Нет аккаунта?',
      variant: 'text',
      to: '/registration',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default LoginForm;

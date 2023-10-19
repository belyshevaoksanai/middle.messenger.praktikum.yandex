import tmpl from './login.tmpl';
import classes from './login.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import Form from '../../../components/Form';

class LoginForm extends Form {
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

  init(): void {
    this.children.title = new Title({ text: 'Вход' });
    this.children.inputLogin = new Input({
      label: 'Логин',
      name: 'login',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Обязательное для заполнения'),
    });
    this.children.inputPassword = new Input({
      label: 'Пароль',
      name: 'password',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Обязательное для заполнения'),
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

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

export default LoginForm;

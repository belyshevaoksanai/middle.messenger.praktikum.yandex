import tmpl from './profile';
import Block from '../../../utils/block';
import classes from './profile.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import editAvatar from '../../../assets/images/edit-avatar.svg';

class ProfileForm extends Block {
  constructor() {
    super('form', {
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
  }

  check(): boolean {
    return (this.children.inputLogin as any).isValid;
  }

  init(): void {
    this.children.title = new Title({ text: 'Иван' });
    this.children.inputEmail = new Input({
      label: 'Почта',
      name: 'email',
    });
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
    this.children.inputNameChat = new Input({
      label: 'Имя в чате',
      name: 'display_name',
    });
    this.children.inputPhone = new Input({
      label: 'Телефон',
      name: 'phone',
    });
    this.children.buttonChangeData = new Button({
      label: 'Изменить данные',
      variant: 'text',
    });
    this.children.buttonChangePassword = new LinkButton({
      label: 'Изменить пароль',
      variant: 'text',
      to: '/password',
    });
    this.children.buttonExit = new LinkButton({
      label: 'Выйти',
      variant: 'text',
      to: '/chat',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, editAvatar), this.props);
  }
}

export default ProfileForm;

import tmpl from './password';
import Block from '../../../utils/block';
import classes from './password.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import editAvatar from '../../../assets/images/edit-avatar.svg';

class PasswordForm extends Block {
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
  }

  check(): boolean {
    return true;
  }

  init(): void {
    this.children.title = new Title({ text: 'Иван' });
    this.children.inputOldPassword = new Input({
      label: 'Старый пароль',
      name: 'oldPassword',
    });
    this.children.inputNewPassword = new Input({
      label: 'Новый пароль',
      name: 'newPassword',
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Повторите новый пароль',
      name: 'confirmPassword',
    });
    this.children.buttonSave = new Button({
      label: 'Сохранить',
    });
    this.children.buttonCancel = new LinkButton({
      label: 'Отмена',
      href: '/profile',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, editAvatar), this.props);
  }
}

export default PasswordForm;

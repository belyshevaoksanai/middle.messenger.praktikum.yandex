import tmpl from './password';
import classes from './password.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import editAvatar from '../../../assets/images/edit-avatar.svg';
import Form from '../../../components/Form';
import { required, validatePassword } from '../../../utils/validate';

class PasswordForm extends Form {
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

  init(): void {
    this.children.title = new Title({ text: 'Иван' });
    this.children.inputOldPassword = new Input({
      label: 'Старый пароль',
      name: 'oldPassword',
      validate: required,
    });
    this.children.inputNewPassword = new Input({
      label: 'Новый пароль',
      name: 'newPassword',
      validate: validatePassword,
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Повторите новый пароль',
      name: 'confirmPassword',
      validate: required,
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

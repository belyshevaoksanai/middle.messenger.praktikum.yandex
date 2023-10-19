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
    const inputNewPassword = ((this.children.inputNewPassword as Block).children.input as Block).element;
    inputNewPassword!.dispatchEvent(new Event('blur'));
    const inputOldPassword = ((this.children.inputOldPassword as Block).children.input as Block).element;
    inputOldPassword!.dispatchEvent(new Event('blur'));
    const inputConfirmPassword = ((this.children.inputConfirmPassword as Block).children.input as Block).element;
    inputConfirmPassword!.dispatchEvent(new Event('blur'));
  }

  check(): boolean {
    return (this.children.inputOldPassword as any).isValid
    && (this.children.inputOldPassword as any).isValid
    && (this.children.inputConfirmPassword as any).isValid;
  }

  init(): void {
    this.children.title = new Title({ text: 'Иван' });
    this.children.inputOldPassword = new Input({
      label: 'Старый пароль',
      name: 'oldPassword',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Обязательно для заполнения'),
    });
    this.children.inputNewPassword = new Input({
      label: 'Новый пароль',
      name: 'newPassword',
      validate: (value: string) => {
        const regexp = /^.*(([A-Z].*[\d])|([\d].*[A-Z])).*$/;
        return regexp.test(value)
          ? ''
          : 'Длина пароля от 8 до 40 символов. Обязательно должен сдержать заглавную букву и цифру.';
      },
    });
    this.children.inputConfirmPassword = new Input({
      label: 'Повторите новый пароль',
      name: 'confirmPassword',
      validate: (value: string) => (value.length > 0
        ? ''
        : 'Обязательно для заполнения'),
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

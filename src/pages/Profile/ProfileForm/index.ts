import tmpl from './ProfileForm';
import classes from './ProfileForm.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LinkButton from '../../../components/LinkButton';
import editAvatar from '../../../assets/images/edit-avatar.svg';
import Form from '../../../components/Form';
import {
  validateEmail, validateLogin, validateName, validatePhone,
} from '../../../utils/validate';
import ProfileFormModel from './ProfileForm.model';

class ProfileForm extends Form {
  init(): void {
    this.children.title = new Title({ text: 'Иван' });
    this.children.inputEmail = new Input({
      label: 'Почта',
      name: 'email',
      validate: validateEmail,
    });
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
    this.children.inputNameChat = new Input({
      label: 'Имя в чате',
      name: 'display_name',
    });
    this.children.inputPhone = new Input({
      label: 'Телефон',
      name: 'phone',
      validate: validatePhone,
    });
    this.children.buttonChangeData = new Button({
      label: 'Изменить данные',
      variant: 'text',
    });
    this.children.buttonChangePassword = new LinkButton({
      label: 'Изменить пароль',
      variant: 'text',
      href: '/password',
    });
    this.children.buttonExit = new LinkButton({
      label: 'Выйти',
      variant: 'text',
      href: '/chat',
    });
  }

  submit(values: ProfileFormModel): void {
    console.log('form value:');
    console.log(values);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, editAvatar), this.props);
  }
}

export default ProfileForm;

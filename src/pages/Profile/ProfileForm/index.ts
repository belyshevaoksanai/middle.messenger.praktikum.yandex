import tmpl from './ProfileForm';
import classes from './ProfileForm.module.scss';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import {
  validateEmail, validateLogin, validateName, validatePhone,
} from '../../../utils/validate';
import ProfileFormModel from './ProfileForm.model';
import AuthController from '../../../controllers/authController';
import router from '../../../core/Router/router';
import store, { IState, StoreEvents } from '../../../core/Store';
import Block from '../../../core/Block/block';
import UserController from '../../../controllers/userController';
import AvatarInput from '../../../components/AvatarInput';
import Routes from '../../../enum/routes';
import withStore from '../../../core/Store/withStore';

class ProfileForm extends Form {
  init(): void {
    this.children.inputAvatar = new AvatarInput({
      name: 'avatar',
      events: {
        change: (event) => {
          const formData = new FormData();
          if (event.target.files?.[0]) {
            formData.append('avatar', event.target.files?.[0]);
            UserController.updateAvatar(formData);
          }
        },
      },
    });
    this.children.title = new Title({ text: '' });
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
    this.children.buttonChangePassword = new Button({
      label: 'Изменить пароль',
      variant: 'text',
      events: {
        click: () => {
          router.go(Routes.Password);
        },
      },
    });
    this.children.buttonExit = new Button({
      label: 'Выйти',
      variant: 'text',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.buttonToChat = new Button({
      label: 'Вернуться в чат',
      variant: 'text',
      events: {
        click: () => {
          router.go(Routes.Chat);
        },
      },
    });
  }

  protected componentDidMount(): void {
    store.on(StoreEvents.Update, (value) => {
      if (value.user) {
        (this.children.title as Block).setProps({
          text: value.user.first_name,
        });
        ((this.children.inputEmail as Block).children.input as Block).setProps({
          value: value.user.email,
        });
        ((this.children.inputLogin as Block).children.input as Block).setProps({
          value: value.user.login,
        });
        ((this.children.inputName as Block).children.input as Block).setProps({
          value: value.user.first_name,
        });
        ((this.children.inputSecondName as Block).children.input as Block).setProps({
          value: value.user.second_name,
        });
        ((this.children.inputNameChat as Block).children.input as Block).setProps({
          value: value.user.display_name,
        });
        ((this.children.inputPhone as Block).children.input as Block).setProps({
          value: value.user.phone,
        });
        (this.children.inputAvatar as Block).setProps({
          value: value.user.avatar,
        });
      }
    });
    AuthController.fetchUser();
  }

  submit({ avatar, ...values }: ProfileFormModel): void {
    UserController.updateUser(values);
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

const mapStateToProps = (state: IState) => ({
  ...state.user,
});

export default withStore(mapStateToProps)(ProfileForm);

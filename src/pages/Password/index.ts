import Handlebars from 'handlebars';
import tmpl from './password.tmpl';
import classes from './password.module.scss';
import Input from '../../components/Input';
import LinkButton from '../../components/LinkButton';
import editAvatar from '../../assets/images/edit-avatar.svg';

const Password = () => Handlebars.compile(tmpl)({
  classes,
  inputOldPassword: Input({ label: 'Старый пароль', name: 'oldPassword' }),
  inputNewPassword: Input({ label: 'Новый пароль', name: 'newPassword' }),
  inputConfirmPassword: Input({ label: 'Повторите новый пароль', name: 'confirmPassword' }),
  buttonSave: LinkButton({ label: 'Сохранить', to: '/profile' }),
  buttonCancel: LinkButton({ label: 'Отмена', to: '/profile' }),
  editAvatar,
});

export default Password;

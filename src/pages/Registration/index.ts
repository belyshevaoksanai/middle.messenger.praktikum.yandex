import Handlebars from 'handlebars';
import tmpl from './registration.tmpl';
import classes from './registration.module.scss';
import Title from '../../components/Title';
import Input from '../../components/Input';
import LinkButton from '../../components/LinkButton';

const Registration = () => Handlebars.compile(tmpl)({
  classes,
  title: Title({ text: 'Регистрация' }),
  inputEmail: Input({ label: 'Почта', name: 'email' }),
  inputLogin: Input({ label: 'Логин', name: 'login' }),
  inputName: Input({ label: 'Имя', name: 'first_name' }),
  inputSecondName: Input({ label: 'Фамилия', name: 'second_name' }),
  inputPhone: Input({ label: 'Телефон', name: 'phone' }),
  inputPassword: Input({ label: 'Пароль', name: 'password' }),
  inputConfirmPassword: Input({ label: 'Пароль (ещё раз)', name: 'confirmPassword' }),
  buttonRegistration: LinkButton({ label: 'Зарегистрироваться', to: '/chat' }),
  buttonSignIn: LinkButton({ label: 'Войти', variant: 'text', to: '/login' }),
});

export default Registration;

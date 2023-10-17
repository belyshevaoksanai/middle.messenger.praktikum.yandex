import Handlebars from 'handlebars';
import tmpl from './login.tmpl';
import classes from './login.module.scss';
import Title from '../../components/Title';
import Input from '../../components/Input';
import LinkButton from '../../components/LinkButton';

const Login = () => Handlebars.compile(tmpl)({
  classes,
  title: Title({ text: 'Вход' }),
  inputLogin: Input({ label: 'Логин', name: 'login' }),
  inputPassword: Input({ label: 'Пароль', name: 'password' }),
  buttonAuth: LinkButton({ label: 'Авторизоваться', to: '/chat' }),
  buttonRegistration: LinkButton({ label: 'Нет аккаунта?', variant: 'text', to: '/registration' }),
});

export default Login;

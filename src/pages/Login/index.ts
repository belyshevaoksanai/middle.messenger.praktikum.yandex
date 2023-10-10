import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl";
import classes from './login.module.scss';
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";

export const Login = () => {
    return Handlebars.compile(tmpl)({
        classes,
        title: Title({text: 'Вход'}),
        inputLogin: Input({label: 'Логин'}),
        inputPassword: Input({label: 'Пароль'}),
        buttonAuth: LinkButton({label: 'Авторизоваться', to: '/chat'}),
        buttonRegistration: LinkButton({label: 'Нет аккаунта?', variant: 'text', to: '/registration'})
    });
};

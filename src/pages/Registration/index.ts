import Handlebars from "handlebars";
import { tmpl } from "./registration.tmpl";
import classes from './registration.module.scss';
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";

export const Registration = () => {
    return Handlebars.compile(tmpl)({
        classes,
        title: Title({text: 'Регистрация'}),
        inputEmail: Input({label: 'Почта'}),
        inputLogin: Input({label: 'Логин'}),
        inputName: Input({label: 'Имя'}),
        inputSecondName: Input({label: 'Фамилия'}),
        inputPhone: Input({label: 'Телефон'}),
        inputPassword: Input({label: 'Пароль'}),
        inputConfirmPassword: Input({label: 'Пароль (ещё раз)'}),
        buttonRegistration: LinkButton({label: 'Зарегистрироваться', to: '/chat'}),
        buttonSignIn: LinkButton({label: 'Войти', variant: 'text', to: '/login'})
    });
};

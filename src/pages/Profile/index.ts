import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl";
import classes from './profile.module.scss';
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Button } from "../../components/Button";
import editAvatar from "../../assets/images/edit-avatar.svg";

export const Profile = () => {
    return Handlebars.compile(tmpl)({
        classes,
        title: Title({text: 'Иван'}),
        inputEmail: Input({label: 'Почта'}),
        inputLogin: Input({label: 'Логин'}),
        inputName: Input({label: 'Имя'}),
        inputSecondName: Input({label: 'Фамилия'}),
        inputNameChat: Input({label: 'Имя в чате'}),
        inputPhone: Input({label: 'Телефон'}),
        buttonChangeData: Button({label: 'Изменить данные', variant: 'text'}),
        buttonChangePassword: LinkButton({label: 'Изменить пароль', variant: 'text', to: '/password'}),
        buttonExit: LinkButton({label: 'Выйти', variant: 'text', to: '/chat'}),
        editAvatar,
    });
};
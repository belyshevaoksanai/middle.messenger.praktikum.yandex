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
        inputEmail: Input({label: 'Почта', name: 'email'}),
        inputLogin: Input({label: 'Логин', name: 'login'}),
        inputName: Input({label: 'Имя', name: 'first_name'}),
        inputSecondName: Input({label: 'Фамилия', name: 'second_name'}),
        inputNameChat: Input({label: 'Имя в чате', name: 'display_name'}),
        inputPhone: Input({label: 'Телефон', name: 'phone'}),
        buttonChangeData: Button({label: 'Изменить данные', variant: 'text'}),
        buttonChangePassword: LinkButton({label: 'Изменить пароль', variant: 'text', to: '/password'}),
        buttonExit: LinkButton({label: 'Выйти', variant: 'text', to: '/chat'}),
        editAvatar,
    });
};

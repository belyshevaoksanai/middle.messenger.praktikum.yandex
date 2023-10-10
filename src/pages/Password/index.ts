import Handlebars from "handlebars";
import { tmpl } from "./password.tmpl";
import classes from './password.module.scss';
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import editAvatar from "../../assets/images/edit-avatar.svg";

export const Password = () => {
    return Handlebars.compile(tmpl)({
        classes,
        inputOldPassword: Input({label: 'Старый пароль'}),
        inputNewPassword: Input({label: 'Новый пароль'}),
        inputConfirmPassword: Input({label: 'Повторите новый пароль'}),
        buttonSave: LinkButton({label: 'Сохранить', to: '/profile'}),
        buttonCancel: LinkButton({label: 'Отмена', to: '/profile'}),
        editAvatar,
    });
};

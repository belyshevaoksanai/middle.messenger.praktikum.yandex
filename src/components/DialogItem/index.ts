import Handlebars from "handlebars";
import { tmpl } from "./dialogItem.tmpl";
import emtyAvatarUrl from '../../assets/images/empty-avatar.svg';
import classes from './dialogItem.module.scss';

export interface DialogItemProps {
    name: string;
}

export const DialogItem = (props: DialogItemProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        classes,
        emtyAvatarUrl,
    });
};
import Handlebars from "handlebars";
import { tmpl } from "./button.tmpl";
import classes from './button.module.scss';

export interface ButtonProps {
    label: string;
    width?: string;
    variant?: 'filled' | 'text';
}

export const Button = (props: ButtonProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        width: props.width || '100%',
        buttonClass: classes[props.variant || 'filled'],
    });
};

import Handlebars from "handlebars";
import { tmpl } from "./link.tmpl";
import classes from './link.module.scss';

interface LinkProps {
    to: string;
    text: string;
    color?: 'primary' | 'secondary'
}

const COLOR = {
    primary: '#999999',
    secondary: '#3369F3',
}

export const Link = (props: LinkProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        classes,
        color: COLOR[props.color || 'primary'],
    });
};

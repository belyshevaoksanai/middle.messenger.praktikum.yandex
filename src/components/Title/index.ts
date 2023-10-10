import Handlebars from "handlebars";
import { tmpl } from "./title.tmpl";
import classes from './title.module.scss';

interface TitleProps {
    text: string;
}

export const Title = (props: TitleProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        classes,
    });
};
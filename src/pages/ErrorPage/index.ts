import Handlebars from "handlebars";
import { tmpl } from "./errorPage.tmpl";
import classes from './errorPage.module.scss';
import { Link } from "../../components/Link";

export const ErrorPage = () => {
    return Handlebars.compile(tmpl)({
        classes,
        link: Link({text: 'Назад к чатам', to: '/chat', color: 'secondary'}),
    });
};

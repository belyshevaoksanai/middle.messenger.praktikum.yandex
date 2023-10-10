import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl";
import classes from './not-found.module.scss';
import { Link } from "../../components/Link";

export const NotFound = () => {
    return Handlebars.compile(tmpl)({
        classes,
        link: Link({text: 'Назад к чатам', to: '/chat', color: 'secondary'}),
    });
};

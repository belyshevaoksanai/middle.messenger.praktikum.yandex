import Handlebars from "handlebars";
import { tmpl } from "./not-found.tmpl";

export const NotFound = () => {
    return Handlebars.compile(tmpl)({});
};
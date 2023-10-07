import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl";

export const Login = () => {
    return Handlebars.compile(tmpl)({});
};
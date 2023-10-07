import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl";
import { Link } from "../../components/Link";

export const Profile = () => {
    return Handlebars.compile(tmpl)({
        mainPageLink: Link({to: '/main', text: 'Main'}),
        chatPageLink: Link({to: '/chat', text: 'Chat'}),
    });
};
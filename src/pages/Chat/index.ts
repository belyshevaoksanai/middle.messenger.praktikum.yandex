import Handlebars from "handlebars";
import { tmpl } from "./chat.tmpl";
import classes from './chat.module.scss';
import { Link } from "../../components/Link";
import arrowUrl from '../../assets/icons/arrow-right.svg'
import { Input } from "../../components/Input";
import { CHAT_DATA } from './mock';
import { DialogItem } from "../../components/DialogItem";

export const Chat = () => {
    return Handlebars.compile(tmpl)({
        classes,
        linkProfile: Link({text: 'Профиль', to: '/profile'}),
        arrowUrl,
        inputSearch: Input({variant: 'filled', placeholder: 'Поиск', name: 'message'}),
        chatDialogs: CHAT_DATA.map((chat) => DialogItem(chat)).join(''),
    });
};

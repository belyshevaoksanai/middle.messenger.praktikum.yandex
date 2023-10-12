import Handlebars from "handlebars";
import { tmpl } from "./linkButton.tmpl";
import { Button, ButtonProps } from "../Button";

interface LinkButtonProps extends ButtonProps {
    to: string;
}

export const LinkButton = ({to, ...buttonProps}: LinkButtonProps) => {
    return Handlebars.compile(tmpl)({
        to,
        button: Button(buttonProps),
    });
};

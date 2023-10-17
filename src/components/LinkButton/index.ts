import Handlebars from 'handlebars';
import tmpl from './linkButton.tmpl';
import { Button, ButtonProps } from '../Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
}

const LinkButton = ({ to, ...buttonProps }: LinkButtonProps) => Handlebars.compile(tmpl)({
  to,
  button: Button(buttonProps),
});

export default LinkButton;

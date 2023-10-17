import Handlebars from 'handlebars';
import tmpl from './input.tmpl';
import classes from './input.module.scss';

interface InputProps {
  label?: string;
  variant?: 'standard' | 'filled';
  placeholder?: string;
  name: string;
}

const Input = (props: InputProps) => Handlebars.compile(tmpl)({
  ...props,
  classes,
  inputClass: classes[props.variant || 'standard'],
});

export default Input;

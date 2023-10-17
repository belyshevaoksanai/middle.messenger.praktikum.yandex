import Handlebars from 'handlebars';
import tmpl from './title.tmpl';
import classes from './title.module.scss';

interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => Handlebars.compile(tmpl)({
  ...props,
  classes,
});

export default Title;

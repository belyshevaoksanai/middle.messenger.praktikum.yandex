import TypeWithClass from '../../models/block-helpers';
import Block from '../../core/Block/block';
import classes from './Link.module.scss';

interface LinkProps {
  href: string;
  text: string;
  color?: 'primary' | 'secondary'
}

const COLOR = {
  primary: '#999999',
  secondary: '#3369F3',
};

class Link extends Block<Omit<TypeWithClass<LinkProps>, 'color'> & { color: string }> {
  constructor(props: LinkProps) {
    super({
      ...props,
      class: classes.link,
      color: COLOR[props.color || 'primary'],
    });
  }

  render() {
    return this.compile('<a class="{{class}}" style="color:{{color}}" href="{{href}}">{{text}}</a>', this.props);
  }
}

export default Link;

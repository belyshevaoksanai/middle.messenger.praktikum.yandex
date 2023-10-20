import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
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
    super('a', {
      ...props,
      class: classes.link,
      color: COLOR[props.color || 'primary'],
    });
  }

  init() {
    (this.element as HTMLAnchorElement)!.href = this.props.href;
    this.element!.style.color = this.props.color;
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}

export default Link;

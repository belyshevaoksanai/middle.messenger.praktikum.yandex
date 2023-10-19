import Block from '../../utils/block';
import classes from './link.module.scss';

interface LinkProps {
  to: string;
  text: string;
  color?: 'primary' | 'secondary'
}

const COLOR = {
  primary: '#999999',
  secondary: '#3369F3',
};

class Link extends Block {
  constructor(props: LinkProps) {
    super('a', {
      ...props,
      href: props.to,
      class: classes.link,
      color: COLOR[props.color || 'primary'],
    });
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}

export default Link;

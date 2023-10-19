import Block from '../../utils/block';
import classes from './button.module.scss';

export interface ButtonProps {
  events?: {
    click?: () => void;
  };
  label: string;
  width?: string;
  variant?: 'filled' | 'text';
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', {
      ...props,
      class: classes[props.variant || 'filled'],
    });
  }

  render() {
    return this.compile('{{label}}', this.props);
  }
}

export default Button;

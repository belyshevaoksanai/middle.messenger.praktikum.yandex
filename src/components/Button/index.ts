import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
import classes from './Button.module.scss';

export interface ButtonProps {
  events?: {
    click?: () => void;
  };
  label: string;
  width?: string;
  variant?: 'filled' | 'text';
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Block<TypeWithClass<ButtonProps>> {
  constructor(props: ButtonProps) {
    super('button', {
      ...props,
      class: classes[props.variant || 'filled'],
    });
  }

  init() {
    if (this.props.type) {
      (this.element as HTMLButtonElement)!.type = this.props.type;
    }
  }

  render() {
    return this.compile('{{label}}', this.props);
  }
}

export default Button;

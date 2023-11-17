import TypeWithClass from '../../models/block-helpers';
import Block from '../../core/Block/block';
import classes from './Button.module.scss';

export interface ButtonProps {
  events?: {
    click?: () => void;
  };
  label: string;
  variant?: 'filled' | 'text';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

class Button extends Block<TypeWithClass<ButtonProps>> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      class: classes[props.variant || 'filled'],
    });
  }

  render() {
    return this.compile(`<button
      class="{{class}}"
      type="{{type}}"
      {{#if disabled}}
        disabled
      {{/if}}
    >{{label}}</button>`, this.props);
  }
}

export default Button;

import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
import classes from './button.module.scss';

export interface ButtonProps {
  events?: {
    click?: () => void;
  };
  iconUrl: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
}

class IconButton extends Block<TypeWithClass<ButtonProps>> {
  constructor(props: ButtonProps) {
    super('button', {
      ...props,
      class: classes.button,
    });
  }

  render() {
    return this.compile('<img src="{{iconUrl}}"/>', this.props);
  }
}

export default IconButton;

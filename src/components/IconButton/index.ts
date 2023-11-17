import TypeWithClass from '../../models/block-helpers';
import Block from '../../core/Block/block';
import classes from './IconButton.module.scss';

export interface IconButtonProps {
  events?: {
    click?: () => void;
  };
  iconUrl: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
}

class IconButton extends Block<TypeWithClass<IconButtonProps>> {
  constructor(props: IconButtonProps) {
    super({
      ...props,
      class: classes.button,
    });
  }

  render() {
    return this.compile('<button class="{{class}}"><img src="{{iconUrl}}"/></button>', this.props);
  }
}

export default IconButton;

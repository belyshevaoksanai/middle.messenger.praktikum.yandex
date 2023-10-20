import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
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

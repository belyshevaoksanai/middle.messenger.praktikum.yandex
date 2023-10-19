import Block from '../../utils/block';
import Button, { ButtonProps } from '../Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
}

class LinkButton extends Block {
  constructor(props: LinkButtonProps) {
    super('a', {
      ...props,
      href: props.to,
    });
  }

  init(): void {
    this.children.button = new Button({
      ...this.props,
      type: 'button',
    });
  }

  render() {
    return this.compile('{{{button}}}', this.props);
  }
}

export default LinkButton;

import Block from '../../utils/block';
import Button, { ButtonProps } from '../Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
}

class LinkButton extends Block<LinkButtonProps> {
  constructor(props: LinkButtonProps) {
    super('a', props);
  }

  init(): void {
    this.children.button = new Button({
      ...this.props,
      type: 'button',
    });

    (this.element as HTMLAnchorElement)!.href = this.props.href;
  }

  render() {
    return this.compile('{{{button}}}', this.props);
  }
}

export default LinkButton;

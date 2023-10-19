import Block from '../../../utils/block';

interface InputErrorProps {
  text: string;
}

class InputError extends Block {
  constructor(props: InputErrorProps) {
    super('span', props);
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}

export default InputError;

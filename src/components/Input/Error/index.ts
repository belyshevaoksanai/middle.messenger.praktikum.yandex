import TypeWithClass from '../../../models/block-helpers';
import Block from '../../../utils/block';
import classes from './Error.module.scss';

interface InputErrorProps {
  text: string;
}

class InputError extends Block<TypeWithClass<InputErrorProps>> {
  constructor(props: InputErrorProps) {
    super('span', {
      ...props,
      class: classes.error,
    });
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}

export default InputError;

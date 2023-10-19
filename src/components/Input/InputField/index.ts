import Block from '../../../utils/block';
import { InputFieldProps } from './input.model';
import classes from './input.module.scss';

class InputField extends Block {
  constructor(props: InputFieldProps) {
    super('input', {
      ...props,
      class: classes[props.variant || 'standard'],
    });
  }

  render() {
    return this.compile('', this.props);
  }
}

export default InputField;

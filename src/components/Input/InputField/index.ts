import TypeWithClass from '../../../models/block-helpers';
import Block from '../../../utils/block';
import { InputFieldProps } from './InputField.model';
import classes from './InputField.module.scss';

class InputField extends Block<TypeWithClass<InputFieldProps>> {
  constructor(props: InputFieldProps) {
    super('input', {
      ...props,
      class: classes[props.variant || 'standard'],
    });
  }

  init() {
    if (this.props.placeholder) {
      (this.element as HTMLInputElement)!.placeholder = this.props.placeholder;
    }

    (this.element as HTMLInputElement)!.name = this.props.name;
  }

  render() {
    return this.compile('', this.props);
  }
}

export default InputField;

import TypeWithClass from '../../../models/block-helpers';
import Block from '../../../core/Block/block';
import { InputFieldProps } from './InputField.model';
import classes from './InputField.module.scss';
import isEqual from '../../../utils/isEqual';

class InputField extends Block<TypeWithClass<InputFieldProps>> {
  constructor(props: InputFieldProps) {
    super({
      ...props,
      class: classes[props.variant || 'standard'],
    });
  }

  protected componentDidUpdate(oldProps: TypeWithClass<InputFieldProps>, newProps: TypeWithClass<InputFieldProps>): boolean {
    if (!isEqual(oldProps, newProps)) {
      return true;
    }
    if (newProps.value !== undefined && (this.element as HTMLInputElement).value !== newProps.value) {
      return true;
    }
    return false;
  }

  render() {
    return this.compile(`<input
      class="{{class}}"
      name="{{name}}"
      placeholder="{{placeholder}}"
      value="{{value}}"
      type="{{type}}"
    />`, this.props);
  }
}

export default InputField;

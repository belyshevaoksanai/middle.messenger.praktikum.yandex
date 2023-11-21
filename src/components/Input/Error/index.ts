import TypeWithClass from '../../../models/block-helpers';
import Block from '../../../core/Block/block';
import classes from './Error.module.scss';

interface InputErrorProps {
  text: string;
}

class InputError extends Block<TypeWithClass<InputErrorProps>> {
  constructor(props: InputErrorProps) {
    super({
      ...props,
      class: classes.error,
    });
  }

  render() {
    return this.compile('<span class="{{class}}">{{text}}</span>', this.props);
  }
}

export default InputError;

import TypeWithClass from '../../models/block-helpers';
import Block from '../../core/Block/block';
import InputError from './Error';
import InputField from './InputField';
import classes from './Input.module.scss';
import tmpl from './Input.tmpl';

interface InputProps {
  label?: string;
  name: string;
  variant?: 'standard' | 'filled';
  type?: 'password';
  events?: {
    focus?: () => void;
    blur?: () => void;
  }
  validate?: (value: string) => string;
}

class Input extends Block<TypeWithClass<InputProps>> {
  isValid: boolean = true;

  constructor(props: InputProps) {
    super({
      ...props,
      class: classes.inputContainer,
    });
  }

  init(): void {
    this.children.input = new InputField({
      ...this.props,
      events: {
        blur: () => {
          if (this.props.validate) {
            const inputBlock = this.children.input as Block;
            const element = inputBlock.element as HTMLInputElement;
            const { value } = element;
            const error = this.props.validate(value);
            this.isValid = !error;
            (this.children.error as Block).setProps({ text: error });
          }
        },
      },
    });

    this.children.error = new InputError({ text: '' });
  }

  render() {
    return this.compile(tmpl(classes), this.props);
  }
}

export default Input;

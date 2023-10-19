import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
import InputError from './Error';
import InputField from './InputField';
import classes from './input.module.scss';
import tmpl from './input.tmpl';

interface InputProps {
  label?: string;
  name: string;
  variant?: 'standard' | 'filled';
  events?: {
    focus?: () => void;
    blur?: () => void;
  }
  validate?: (value: string) => string;
}

class Input extends Block<TypeWithClass<InputProps>> {
  isValid: boolean = true;

  constructor(props: InputProps) {
    super('div', {
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
            const error = this.props.validate(
              ((this.children.input as Block).element as any as HTMLInputElement).value,
            );
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

import Block from '../../utils/block';
import Input from '../Input';

class Form extends Block {
  markAllAsTouched(): void {
    Object.keys(this.children).forEach((childName) => {
      if (this.children[childName] instanceof Input) {
        const element = this.children[childName] as Input;
        const input = element.children.input as Block;
        input.element!.dispatchEvent(new Event('blur'));
      }
    });
  }

  check(): boolean {
    let res = true;
    Object.keys(this.children).forEach((childName) => {
      if (this.children[childName] instanceof Input) {
        res = res && (this.children[childName] as Input).isValid;
      }
    });
    return res;
  }
}

export default Form;

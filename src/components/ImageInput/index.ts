import Block from '../../core/Block/block';
import { ImageInputProps } from './ImageInput.model';
import classes from './ImageInput.module.scss';

class ImageInput extends Block<ImageInputProps> {
  constructor(props: ImageInputProps) {
    super(props);
  }

  render() {
    return this.compile(`<input class="${classes.imageContainer}" id="{{name}}" name="{{name}}" type="file" />`, this.props);
  }
}

export default ImageInput;

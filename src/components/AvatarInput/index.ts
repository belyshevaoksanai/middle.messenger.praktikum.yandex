
import Block from '../../core/Block/block';
import editAvatar from '../../assets/images/edit-avatar.svg';
import ImageInput from '../ImageInput';
import classes from './AvatarInput.module.scss';
import { ImageInputProps } from '../ImageInput/ImageInput.model';

class AvatarInput extends Block<ImageInputProps> {
  protected init(): void {
    this.children.inputAvatar = new ImageInput({
      name: 'avatar',
      events: this.props.events,
    });
  }

  render() {
    return this.compile(`
    <div class="${classes.imageUpload}">
      <label for="avatar">
        {{#if value}}
          <img class="${classes.avatarImage}" src="https://ya-praktikum.tech/api/v2/resources/{{value}}"/>
        {{else}}
          <img class="${classes.avatarImage}" src="${editAvatar}"/>
        {{/if}}
      </label>
      {{{inputAvatar}}}
    </div>`, this.props);
  }
}

export default AvatarInput;

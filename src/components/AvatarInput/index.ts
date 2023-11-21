import Block from '../../core/Block/block';
import editAvatar from '../../assets/images/edit-avatar.svg';
import ImageInput from '../ImageInput';
import classes from './AvatarInput.module.scss';
import { ImageInputProps } from '../ImageInput/ImageInput.model';

class AvatarInput extends Block<ImageInputProps> {
  constructor(props: ImageInputProps) {
    super({
      ...props,
      size: props.size || '130px',
    });
  }

  protected init(): void {
    this.children.inputAvatar = new ImageInput({
      name: this.props.name || 'avatar',
      events: {
        ...this.props.events,
        change: (event) => {
          if ((event.currentTarget as HTMLElement).id === this.props.name) {
            this.props.events?.change?.(event);
          }
        },
        click: (event) => {
          event.stopPropagation();
        },
      },
    });
  }

  render() {
    return this.compile(`
    <div class="${classes.imageUpload}" style="width:{{size}}; height: {{size}}">
      <label for="{{name}}">
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

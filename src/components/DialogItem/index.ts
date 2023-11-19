import Block from '../../core/Block/block';
import tmpl from './DialogItem.tmpl';
import classes from './DialogItem.module.scss';
import AvatarInput from '../AvatarInput';
import ChatController from '../../controllers/chatController';

export interface DialogItemProps {
  name: string;
  id: number;
  avatar?: string;
  active?: boolean;
  events?: {
    click: (event: Event) => void;
  }
}

export class DialogItem extends Block<DialogItemProps> {
  protected init(): void {
    this.children.inputAvatar = new AvatarInput({
      name: `avatar${this.props.id}`,
      value: this.props.avatar,
      size: '60px',
      events: {
        change: (event) => {
          const formData = new FormData();
          if (event.target.files?.[0]) {
            formData.append('avatar', event.target.files?.[0]);
            formData.append('chatId', this.props.id.toString());
            ChatController.updateAvatar(formData);
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes), this.props);
  }
}

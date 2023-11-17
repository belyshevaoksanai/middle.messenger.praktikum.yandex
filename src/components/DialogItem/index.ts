import Block from '../../core/Block/block';
import tmpl from './DialogItem.tmpl';
import emtyAvatarUrl from '../../assets/images/empty-avatar.svg';
import classes from './DialogItem.module.scss';

export interface DialogItemProps {
  name: string;
  active?: boolean;
}

export class DialogItem extends Block<DialogItemProps> {
  constructor(props: DialogItemProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, emtyAvatarUrl), this.props);
  }
}

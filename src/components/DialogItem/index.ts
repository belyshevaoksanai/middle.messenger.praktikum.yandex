import Block from '../../utils/block';
import tmpl from './dialogItem2.tmpl';
import emtyAvatarUrl from '../../assets/images/empty-avatar.svg';
import classes from './dialogItem2.module.scss';

export interface DialogItemProps {
  name: string;
}

export class DialogItem extends Block<DialogItemProps> {
  constructor(props: DialogItemProps) {
    super('div', props);
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl(classes, emtyAvatarUrl), this.props);
  }
}

import Block from '../../core/Block/block';
import isEqual from '../../utils/isEqual';
import crossIcon from '../../assets/icons/cross.svg';
import IconButton from '../IconButton';
import classes from './Dialog.module.scss';

interface IDialogProps {
  isShow: boolean;
}

abstract class Dialog extends Block {
  constructor(props: IDialogProps) {
    super({
      ...props,
      class: classes['overlay'],
      closeButton: new IconButton({
        iconUrl: crossIcon,
        events: {
          click: () => {
            this.setProps({
              isShow: false,
            })
          }
        }
      })
    });
  }

  abstract renderDialog(): string;

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (newProps.isShow) {
      this.element?.classList.add(classes.show);
    } else {
      this.element?.classList.remove(classes.show);
    }
    return isEqual(oldProps, newProps);
  }

  render() {
    return this.compile(`<div>
      <div class="${classes.popup}">
        {{{closeButton}}}
        ${this.renderDialog()}
      </div>
    </div>`, this.props);
  }
}

export default Dialog;

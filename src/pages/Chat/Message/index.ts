import TypeWithClass from '../../../models/block-helpers';
import Block from '../../../core/Block/block';
import classes from './Message.module.scss';

interface MessageProps {
  text: string;
  isCurrentUser: boolean;
}

class Message extends Block<TypeWithClass<MessageProps>> {
  constructor(props: MessageProps) {
    super({
      ...props,
      class: props.isCurrentUser ? classes.currentUserMessage : classes.message,
    });
  }

  render() {
    return this.compile('<div><span>{{text}}</span><div>', this.props);
  }
}

export default Message;

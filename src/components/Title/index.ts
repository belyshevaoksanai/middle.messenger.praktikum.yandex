import TypeWithClass from '../../models/block-helpers';
import Block from '../../core/Block/block';
import classes from './Title.module.scss';

interface TitleProps {
  text: string;
}

class Title extends Block<TypeWithClass<TitleProps>> {
  constructor(props: TitleProps) {
    super({
      ...props,
      class: classes.title,
    });
  }

  render() {
    return this.compile('<h1 class="{{class}}">{{text}}</h1>', this.props);
  }
}

export default Title;

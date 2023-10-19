import TypeWithClass from '../../models/block-helpers';
import Block from '../../utils/block';
import classes from './title2.module.scss';

interface TitleProps {
  text: string;
}

class Title extends Block<TypeWithClass<TitleProps>> {
  constructor(props: TitleProps) {
    super('h1', {
      ...props,
      class: classes.title,
    });
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}

export default Title;

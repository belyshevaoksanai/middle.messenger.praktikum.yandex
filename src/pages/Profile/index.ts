import classes from './profile2.module.scss';
import Block from '../../utils/block';
import ProfileForm from './ProfileForm';

class Profile extends Block {
  constructor() {
    super('div', {
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new ProfileForm();
  }

  protected render(): DocumentFragment {
    return this.compile('{{{form}}}', this.props);
  }
}

export default Profile;

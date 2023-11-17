import classes from './Profile.module.scss';
import Block from '../../core/Block/block';
import ProfileForm from './ProfileForm';
import { IState, withStore } from '../../core/Store';

class ProfileComponent extends Block {
  constructor() {
    super({
      class: classes.registration,
    });
  }

  init(): void {
    this.children.form = new ProfileForm({});
  }

  protected render(): DocumentFragment {
    return this.compile('<div class="{{class}}">{{{form}}}</div>', this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  ...state.user,
});

const Profile = withStore(mapStateToProps)(ProfileComponent);

export default Profile;

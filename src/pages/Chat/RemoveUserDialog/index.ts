import Dialog from '../../../components/Dialog';
import RemoveUserForm from './RemoveUserForm';

class RemoveUserDailog extends Dialog {
  protected init(): void {
    this.children.form = new RemoveUserForm({
      events: {
        close: () => {
          this.setProps({
            isShow: false,
          })
        }
      }
    });
  }

  renderDialog(): string {
    return '{{{form}}}';
  }
}

export default RemoveUserDailog;

import Dialog from '../../../components/Dialog';
import AddUserForm from './AddUserForm';

class AddUserDailog extends Dialog {
  protected init(): void {
    this.children.form = new AddUserForm({
      events: {
        close: () => {
          this.setProps({
            isShow: false,
          });
        },
      },
    });
  }

  renderDialog(): string {
    return '{{{form}}}';
  }
}

export default AddUserDailog;

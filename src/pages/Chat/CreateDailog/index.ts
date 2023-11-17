import Dialog from '../../../components/Dialog';
import CreateForm from './CreateForm';

class CreateDailog extends Dialog {
  protected init(): void {
    this.children.form = new CreateForm({
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

export default CreateDailog;

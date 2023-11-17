import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import ChatController from '../../../../controllers/chatController';
import store, { IState, StoreEvents } from '../../../../core/Store';
import withStore from '../../../../core/Store/withStore';
import { required } from '../../../../utils/validate';
import tmpl from './AddUserForm';
import classes from './AddUserForm.module.scss';

class AddUserForm extends Form {
  chatId: string = '';

  init(): void {
    this.children.idInput = new Input({
      label: 'id',
      name: 'id',
      validate: required,
    });
    this.children.buttonAdd = new Button({
      label: 'Добавить',
    });
  }

  async submit(value: { id: string }): Promise<void> {
    await ChatController.addUserInChat({
      users: [value.id],
      chatId: this.chatId,
    });
    this.props.events.close();
  }

  protected componentDidMount(): void {
    store.on(StoreEvents.Update, (value: IState) => {
      if (value.chatId) {
        this.chatId = value.chatId;
      }
    });
    ChatController.getChats();
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

const mapStateToProps = (state: IState) => ({
  chatId: state.chatId,
});

export default withStore(mapStateToProps)(AddUserForm);

import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import ChatController from '../../../../controllers/chatController';
import { IState } from '../../../../core/Store';
import withStore from '../../../../core/Store/withStore';
import { required } from '../../../../utils/validate';
import tmpl from './AddUserForm';
import classes from './AddUserForm.module.scss';

class RemoveUserForm extends Form {
  init(): void {
    this.children.idInput = new Input({
      label: 'id',
      name: 'id',
      validate: required,
    });
    this.children.buttonAdd = new Button({
      label: 'Удалить',
    });
  }

  async submit(value: { id: string }): Promise<void> {
    await ChatController.removeUserInChat({
      users: [value.id],
      chatId: this.props.chatId,
    });
    this.props.events.close();
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

const mapStateToProps = (state: IState) => ({
  chatId: state.chatId,
});

export default withStore(mapStateToProps)(RemoveUserForm);

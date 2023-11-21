import { ICreateChat } from '../../../../api/chatApi';
import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import ChatController from '../../../../controllers/chatController';
import { required } from '../../../../utils/validate';
import tmpl from './CreateForm';
import classes from './CreateForm.module.scss';

class CreateForm extends Form {
  init(): void {
    this.children.nameInput = new Input({
      label: 'Наименование',
      name: 'title',
      validate: required,
    });
    this.children.buttonCreate = new Button({
      label: 'Создать',
    });
  }

  async submit(value: ICreateChat): Promise<void> {
    await ChatController.create(value);
    this.props.events.close();
  }

  renderForm(): string {
    return tmpl(classes);
  }
}

export default CreateForm;

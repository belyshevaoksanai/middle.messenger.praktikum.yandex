import store, { IState, StoreEvents } from '.';
import Block from '../Block/block';

const withStore = (
  mapStateToProps: (data: IState) => any,
) => (Component: typeof Block) => class extends Component {
  constructor(propsWithChildren: any) {
    super({ ...propsWithChildren, ...mapStateToProps(store.getState()) });

    store.on(StoreEvents.Update, () => {
      const newProps = mapStateToProps(store.getState());

      this.setProps(newProps);
    });
  }
};

export default withStore;

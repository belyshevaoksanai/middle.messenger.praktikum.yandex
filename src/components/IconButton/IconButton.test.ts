import { expect } from 'chai';
import sinon from 'sinon';
import IconButton from '.';

describe('IconButton component', () => {
  it('Should be clickable', () => {
    const callback = sinon.stub();

    const props = {
      iconUrl: '',
      events: {
        click: callback,
      },
    };

    const iconButton = new IconButton(props);

    iconButton.element?.click();

    expect(callback.calledOnce).to.eq(true);
  });
});

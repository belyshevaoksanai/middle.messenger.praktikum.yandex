import { expect } from 'chai';
import sinon from 'sinon';
import Button from '.';

describe('Button component', () => {
  it('Should be clickable', () => {
    const callback = sinon.stub();

    const props = {
      label: 'Button',
      events: {
        click: callback,
      },
    };

    const button = new Button(props);

    button.element?.click();

    expect(callback.calledOnce).to.eq(true);
  });
});

import { expect } from 'chai';
import Form from '.';

describe('Form', () => {
  class MockForm extends Form {
    submit() {}

    renderForm() {
      return '<div id="mockForm"></div>';
    }
  }

  it('check wrapper renderForm content in form tag', () => {
    const form = new MockForm({});
    expect(form.element?.tagName).to.eq('FORM');
    expect(form.element?.querySelector('#mockForm')).to.not.eq(null);
  });
});

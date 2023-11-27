import { expect } from 'chai';
import Link from '.';

describe('Link component', () => {
  it('Should be navigate to href', () => {
    const originalHref = window.location.href;
    const href = 'test';

    const props = {
      text: 'Link',
      href,
    };

    const link = new Link(props);

    link.element?.click();

    expect(window.location.href).to.eq(`${originalHref}${href}`);
  });
});

/* eslint-disable max-classes-per-file */
import { expect } from 'chai';
import sinon from 'sinon';
import Router from './router';
import Block from '../Block/block';

describe('Router', () => {
  const originalHref = window.location.href;
  const href = 'test';
  const href2 = 'test2';
  beforeEach(() => {
    window.history.replaceState({}, '', decodeURIComponent(originalHref));
  });
  afterEach(() => {
    Router.destroy();
  });

  class MockComponent1 extends Block {
  }

  class MockComponent2 extends Block {
  }

  it('method go()', () => {
    Router.start();
    Router.go(href);
    expect(window.location.href).to.eq(originalHref + href);
  });
  it('method use()', () => {
    expect(Router.getInstance().routes.length).to.eq(0);
    Router.use(href, MockComponent1);
    expect(Router.getInstance().routes.length).to.eq(1);
  });
  it('method start() call render route', () => {
    const sandbox = sinon.createSandbox();
    Router
      .use(href, MockComponent1)
      .use(href2, MockComponent2);
    const spyRender = sandbox.spy(Router.getInstance().routes[0], 'render');
    const spyRender2 = sandbox.spy(Router.getInstance().routes[1], 'render');
    Router.start();
    Router.go(href);

    expect(spyRender.called).to.eq(true);
    expect(spyRender2.called).to.eq(false);

    Router.go(href2);

    expect(spyRender2.called).to.eq(true);
  });
});

import { expect } from 'chai';
import set from './set';

describe('set function', () => {
  it('Should return object if passed object is not an real object', () => {
    const obj = null;
    const path = 'a.b';
    const value = 1;

    expect(set(obj, path, value)).to.eq(obj);
  });

  it('Should throw an error if path param is not a string', () => {
    const obj = { a: '1' };
    const path = 1 as any as string;
    const value = 1;

    const fn = () => set(obj, path, value);

    expect(fn).to.throw(Error);
  });

  it('Should set value by path', () => {
    const obj = { a: '1' };
    const path = 'a';
    const value = 't';

    expect(set(obj, path, value)).to.have.nested.property(path).to.eq(value);
  });

  it('Should mutate original object', () => {
    const obj = { a: '1' };
    const path = 'a';
    const value = 't';

    expect(set(obj, path, value)).to.eq(obj);
  });
});

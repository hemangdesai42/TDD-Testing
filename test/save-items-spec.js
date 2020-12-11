const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const items = ['1', '2'];
    const newItem = '3';

    const result = saveItems(items, newItem);

    expect(result).to.contain(newItem);
  });

  it('makes sure the result and the original are different', () => {
    const items = ['1', '2'];
    const newItem = '3';

    const result = saveItems(items, newItem);

    expect(items === result).to.be.false;
  });
});

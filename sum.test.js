const sum = require('./sum.js');

describe('Testing the sum package', () => {
  test('Should be able to sum 2 numbers', () => {
    let result = sum(4,8);

    expect(result).toEqual(12);
  });
});

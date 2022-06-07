import handler from '../handler.js';

test('array with numbers', () => {
  const arr = [-1, 8, 1000, -17, 2.5, -4.1, 0, 99, -4.1, 35];
  const bigArr = Array(1000000).fill(1);
  expect(handler(arr)).toEqual(-21.1);
  expect(handler([0, 0, 0, 0])).toEqual(0);
  expect(handler(bigArr)).toEqual(2);
});

test('array of less than two elements', () => {
  expect(handler([])).toBeNull();
  expect(handler([5464])).toBeNull();
});

test('inappropriate data', () => {
  expect(handler(['data', 0, 0])).toBeNull();
  expect(handler([-1, 8, NaN])).toBeNull();
  expect(handler([null, 1, 1])).toBeNull();
});

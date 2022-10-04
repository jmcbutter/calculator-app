import Calculator from "../Calculator";

test('test sum function', () => {
  expect(Calculator.sum(1, 2)).toBe(3);
})

test('test product function', () => {
  expect(Calculator.product(1, 2)).toBe(2);
})

test('test difference function', () => {
  expect(Calculator.difference(1, 2)).toBe(-1);
})

test('test quotient function', () => {
  expect(Calculator.quotient(1, 2)).toBeCloseTo(0.5);
})
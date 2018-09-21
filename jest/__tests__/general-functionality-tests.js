const Calculator = require("../../src/calculator");

test('adding 1 + 2 equals 3', () => {
  let result = Calculator.add(1, 2);
    expect(result).toBe(3);
    expect(result).not.toBe(4);
});

describe("skipped tests", () => {
  test.skip("this test will be skipped", () => {
    expect(true).toBe(false);
  });

  xtest("this test will be skipped as well", () => {
    expect(true).toBe(false);
  });
});

xdescribe("skipped test block", () => {
  test("this test will be skipped for sure", () => {
    expect(true).toBe(false);
  });
});

describe.skip("the other skipped test block", () => {
  test("this test will be skipped as were the previous ones", () => {
    expect(true).toBe(false);
  });
});

test('this test fails due to no assert', () => {
});

test('this test fails', () => {
  expect(true).toBeFalsy();
});
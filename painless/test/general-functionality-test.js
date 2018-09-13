var painless = require('painless');
var test = painless.createGroup();
var assert = painless.assert;
const Calculator = require('../../src/calculator');

test('should return 3 when adding 1 to 2', () => {
    let result = Calculator.add(1, 2);
    assert.equal(result, 3);
});

test('this test should fail', () => {
    assert.fail();
});

test('this test has no assert and fails due to timeout', assert => {
});
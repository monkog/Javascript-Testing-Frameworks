import test from 'ava';
const Calculator = require('../../src/calculator');

test('should return 3 when adding 1 to 2', assert => {
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
});

test.skip('this test should not be run', assert => {
    assert.fail();
});

test('this test should fail', assert => {
    assert.fail();
});

test('this test has no assert', assert => {
});

test('should return 3 when adding 1 to 2', assert => {
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
});
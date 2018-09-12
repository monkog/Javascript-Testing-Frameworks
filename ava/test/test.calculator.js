import test from 'ava';
const Calculator = require('../../src/calculator');

test('should return 3 when adding 1 to 2', assert => {
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
});

test.skip('this test should not be run', assert => {
    assert.fail();
});

test('this test should skip an assert and pass', assert => {
    assert.skip.fail();
    assert.pass();
});

test.todo('a test for multiplication shall be written someday');

test('this test should fail', assert => {
    assert.fail();
});

test('this test has no assert', assert => {
});

test('should return 3 when adding 1 to 2', assert => {
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
});

test('test planning functionality', assert => {
    assert.plan(1);
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
});

test('test plan will pass no matter for skipped assert', assert => {
    assert.plan(2);
    let result = Calculator.add(1, 2);
    assert.skip.is(result, 15);
    assert.is(result, 3);
});

test('this plan will fail due to too many assertions', assert => {
    assert.plan(1);
    let result = Calculator.add(1, 2);
    assert.is(result, 3);
    assert.is(result, 3);
});

test.failing('we expect this test to be failing so it can be marked as known failure', assert => {
    assert.fail();
});
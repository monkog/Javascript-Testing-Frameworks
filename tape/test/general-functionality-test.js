const Calculator = require('../../src/calculator');
const test = require('tape');

test('Simple passing tests', function (t) {
    test('end needs to be called to end the test', (assert) => {
        let res = Calculator.add(1, 2);
        assert.equal(res, 3);
        assert.end();
    });

    test('end can be called on test object', (assert) => {
        let res = Calculator.substract(1, 2);
        assert.equal(res, -1);
    }).end()
    
    test('when specifying plan, end can be omitted', (assert) => {
        assert.plan(1);
        let res = Calculator.multiply(1, 2);
        assert.equal(res, 2);
    });
}).end();

test('Failing tests', function (t) {
    test('planned two asserts, but got three', (assert) => {
        assert.plan(2);
        let res = Calculator.multiply(1, 2);
        assert.equal(res, 2);
        assert.equal(res, 2);
        assert.equal(res, 2);
    });
}).end();

test('Skipped tests', function (t) {
    test.skip('this test should not be run', (assert) => {
        assert.fail();
    });
}).end();
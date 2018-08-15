const Calculator = require('../src/calculator');
const test = require('tape');

test('add 1 to 2 returns 3', (assert) => {
    let res = Calculator.add(1, 2);
    assert.equal(res, 3);
    assert.end();
})

test('sustract 1 from 2 returns -1', (assert) => {
    let res = Calculator.substract(1, 2);
    assert.equal(res, -1);
    assert.end();
})
import test from 'ava';
const Animals = require('../../src/animals');

test('should be an async tortoise', async assert => {
    await Animals.tortoise();
    assert.pass();
});
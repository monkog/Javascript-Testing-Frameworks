var painless = require('painless');
var assert = painless.assert;
var test = painless.createGroup();
const Animals = require('../../src/animals');

test.beforeEach(() => {
    console.log('run this method before each test');
});

test('should be an async tortoise', async function done() {
    let result = await Animals.tortoise();
    assert.equal(result, "I'm slow");
});

test('should be a promise tortoise', async () => {
    return Promise.resolve(Animals.tortoise()).then(result => {
        assert.equal(result, "I'm slow");
    });
});

test('should be an eventually resolved tortoise', () => {
    let result = Animals.tortoise();
    return assert.eventually.equal(result, "I'm slow");
});

test.afterEach(() => {
    console.log('run this method after each test');
});
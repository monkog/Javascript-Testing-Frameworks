import test from 'ava';
const Animals = require('../../src/animals');

test.before(t=>{
    console.log('run this method once before all tests');
});

test.beforeEach(t=>{
    console.log('run this method before each test');
});

test('should be an async tortoise', async assert => {
    await Animals.tortoise();
    assert.pass();
});

test('should be a promise tortoise', async assert => {
    return Promise.resolve(Animals.tortoise()).then( result =>{
        assert.pass();
    });
});

test('power assert functionality', t => {
	const a = /foo/;
	const b = 'bar';
	const c = 'baz';
	t.true(a.test(b) || b === c);
});

test.after(t=>{
    console.log('run this method once after all tests');
});

test.after.always(t=>{
    console.log('run this method once after all tests, even if there were some failures');
});

test.afterEach(t=>{
    console.log('run this method after each test');
});
const Calculator = require('../../src/calculator');
var assert = require('assert');

let tries = 1;

describe('Simple passing tests', () => {
    it('should return 3 when adding 1 to 2', () => {
        let result = Calculator.add(1, 2);
        assert.equal(result, 3);
    });
});

describe('Failing tests', () => {
    it('fails when expecting that adding 1 to 2 returns 4', () => {
        let result = Calculator.add(1, 2);
        assert.equal(result, 4);
    });
});

describe('Skipped tests', () => {
    describe.skip('Skipped suite', () => {    
        it('this test will deffinetely be skipped', () => {
            assert.fail();
        });
    });
    
    it.skip('this test should not be run', () => {
        assert.fail();
    });
    
    xit('neither should this test', () => {
        assert.fail();
    });
    
    it('this test will be skipped as well, but needs a function to be passed instead of lambda', function() {
        this.skip();
        assert.fail();
    });
});

describe('Retry failed tests', function() {
    this.retries(2);

    it('this test will pass when run the second time', () => {
        console.log('\tRunning for the ' + tries + ' time');
        if(tries++ == 1){
            assert.fail();
        }
    });
});
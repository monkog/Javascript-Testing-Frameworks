const Calculator = require('../../../../src/calculator');

it('should return 3 when adding 1 to 2', () => {
    let result = Calculator.add(1, 2);
    expect(result).toBe(3);
});

it('should return 2 when multiplying 1 and 2', function() {
    let result = Calculator.multiply(1, 2);
    expect(result).toBe(2);
});

describe('skipped tests:', () => {
    xit('this test won\'t be run', () => {
        fail();
    });
});

xdescribe('skipped describe:', () => {
    xit('this test won\'t be run', () => {
        fail();
    });

    it('this test won\'t be run as well', () => {
        fail();
    });
});

it('this test should fail', () => {
    fail();
});

it('this test has no assert and fails due to timeout', () => {
});
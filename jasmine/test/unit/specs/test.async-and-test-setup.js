const { tortoise } = require("../../../../src/animals");

beforeAll(function() {
    console.log('run this method once before all tests');
})

beforeEach(function() {
    console.log('run this method before each test');
});

describe('async tests', () => {
    it('should be an async tortoise', async function() {
        let result = await tortoise();
        expect(result).toBe("I'm slow");
    })

    it('should be a promise tortoise', function(done) {
        tortoise().then((result) => {
            expect(result).toBe("I'm slow");
            done();
        })
    })
})

afterEach(function() {
    console.log('run this method after each test');
});

afterAll(function() {
    console.log('run this method once after all tests');
});
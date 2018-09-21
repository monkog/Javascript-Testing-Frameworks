let Animals = require("../../src/animals");

beforeAll(() => {
    console.log('run this method once before all tests');
});

beforeEach(() => {
    console.log('run this method before each test');
});

describe("Async tests", () => {
    test("done Promise tortoise", done => {
        Animals.tortoise().then(result =>{
            expect(result).toBe("I'm slow");
            done();
        });
    });
    
    test("returned Promise tortoise", () => {
        return Animals.tortoise().then(result =>{
            expect(result).toBe("I'm slow");
        });
    });
    
    test("resolved tortoise", () => {
        let result = Animals.tortoise();
        return expect(result).resolves.toBe("I'm slow");
    });
    
    test("async tortoise", async () => {
        let result = await Animals.tortoise();
        expect(result).toBe("I'm slow");
    });
});

afterAll(() => {
    console.log('run this method once after all tests');
});

afterEach(() => {
    console.log('run this method after each test');
});
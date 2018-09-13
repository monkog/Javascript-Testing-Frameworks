const Animals = require('../../src/animals');
var assert = require('assert');

describe('Slow test annotation', () => {
    it('should be a slow tortoise', (done) => {
        Animals.tortoise().then((result) =>{
            assert.equal(result, "I'm slow");
            done();
        });
    });
    
    it('should be a fast tortoise', function(done) {
        this.slow(10000);
        Animals.tortoise().then((result) =>{
            assert.equal(result, "I'm slow");
            done();
        });
    });
    
    it('should be a promise tortoise', function(done) {
        Promise.resolve(Animals.tortoise()).then((result) =>{
            assert.equal(result, "I'm slow");
            done();
        });
    });
    
    it('should be an async tortoise', async () => {
        let result = await Animals.tortoise();
        assert.equal(result, "I'm slow");
    });
});
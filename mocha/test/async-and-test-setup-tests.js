const Animals = require('../../src/animals');

describe('Slow test annotation', () => {
    it('should be a slow tortoise', (done) => {
        Animals.tortoise().then(() =>{
            done();
        });
    });
    
    it('should be a fast tortoise', function(done) {
        this.slow(10000);
        Animals.tortoise().then(() =>{
            done();
        });
    });
});
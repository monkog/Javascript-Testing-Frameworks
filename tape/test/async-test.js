const { DateTimeHelper } = require('../../src/date-time-helper');
const Animals = require('../../src/animals');
const test = require('tape');

test('Async tests', function (t) {
    test('should handle asynchronous test', (assert) => {
        DateTimeHelper.prototype.handler = function () {
            let diff = (Date.now() - this.startTime);
            this.stop();
            assert.ok(true);
            assert.end();
        }

        let uut = new DateTimeHelper();
        uut.start();
    });

    test('should be an async tortoise', async assert => {
        let result = await Animals.tortoise();
        assert.equal(result, "I'm slow");
        assert.end();
    });

    test('should be a promise tortoise', assert => {
        return Promise.resolve(Animals.tortoise()).then(result => {
            assert.equal(result, "I'm slow");
            assert.end();
        });
    });
}).end();
const { DateTimeHelper } = require('../../src/date-time-helper');
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
}).end();
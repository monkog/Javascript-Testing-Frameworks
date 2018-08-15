const { DateTimeHelper } = require('../src/date-time-helper');
const mocha = require('mocha');
const sinon = require('sinon');
const { assert } = require('./my-assert');

describe('DateTimeHelper', () => {
    it('', () => {
        assert(typeof DateTimeHelper === 'function');
        assert((/^class/).test( DateTimeHelper.toString()));
    });
    
    // it('', (done) => {
    //     DateTimeHelper.prototype.handler = function () {
    //         let diff = (Date.now() - this.startTime);
    //         console.log("mocked");
    //         this.stop();
    //         assert(true);
    //         assert(diff === 1000, `time exceeded by ${diff - 1000}`);
    //         done();
    //     }

    //     let uut = new DateTimeHelper();
    //     uut.start();
    // });
    
    it('', () => {
        const t = sinon.spy(global, 'setInterval');
        
        let uut = new DateTimeHelper();
        uut.start();
        assert(t.called);
        uut.stop();
    });
    
    it('', () => {
        const t = sinon.spy(DateTimeHelper.prototype, 'handler');
        
        let uut = new DateTimeHelper();
        uut.start();
        assert(t.called);
        uut.stop();
    });
});
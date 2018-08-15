class DateTimeHelper {
    constructor () {
        this.interval = 1000;
        this.handle = null;
    }

    stop () {
        clearInterval(this.handle);
    }

    start () {
        this.startTime = Date.now();
        this.handle = setInterval(this.handler.bind(this), this.interval);
    }

    handler () {
        console.log("handled");
    }
}

module.exports = {
    DateTimeHelper
};
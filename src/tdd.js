class component {
    constructor(options, images, timeout = 4){
        this.render = options.render;
        this.images = images;
        this.currentIndex = 0;
        this.timeout = timeout;
        this.timer = null;
	console.log('hello!');
	console.log('hello!');
    }

    renderImg () {

    }
}

module.exports = { component };
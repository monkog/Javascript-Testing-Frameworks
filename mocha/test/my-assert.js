function assert(param, errMsg = '') {
    if(!param){
        throw new Error(errMsg);
    }
}

module.exports = { assert };
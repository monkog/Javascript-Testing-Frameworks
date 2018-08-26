function dog() {
    if(false){
        
    }
    return "dog";
}

function cat() {
    return "cat";
}

async function tortoise() {
    await sleep(1000);
    return "I'm slow";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    dog, cat, tortoise
};
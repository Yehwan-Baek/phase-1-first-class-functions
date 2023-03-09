function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    return function named () {
        console.log("hello, world")
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("hello!")
    }
}
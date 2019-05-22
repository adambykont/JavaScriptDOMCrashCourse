const cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve("Cleaned the room");
    })
};

const removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '. Garbages has been removed');
    });
}

const winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '. Won icecream.');
    });
};

cleanRoom()
    .then(function (result) {
        return removeGarbage(result);
    })
    .then(function (result) {
        return winIcecream(result);
    })
    .then(function (result) {
        console.log("Finished: " + result);
    });

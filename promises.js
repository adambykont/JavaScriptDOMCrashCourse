const promiseToCleanUpTheRoom = new Promise(function (resolve, reject) {

    const isClean = Math.random() > 0.5 ? true : false;

    if (isClean) {
        resolve('Room is clean');
    } else {
        reject('Room is messy');
    }
});

promiseToCleanUpTheRoom
    .then(function (fromResolve) {
        console.log("Result: " + fromResolve);
    })
    .catch(function (fromReject) {
        console.log("Result: " + fromReject);
    })
    .finally(function () {
        console.log("I'm working hard for my master");
    });


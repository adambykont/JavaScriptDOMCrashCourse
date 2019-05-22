function cleanTheRoom(resolve, reject) {
    const isClean = Math.random() > 0.5;
    if (isClean) {
        resolve('Room is clean');
    } else {
        reject('Still messy');
    }
}

const dailyJob = new Promise(cleanTheRoom);

dailyJob
    .then((fromResolve) => console.log("Result: " + fromResolve))
    .catch(fromReject => console.log("Result: " + fromReject))
    .finally(() => console.log("That's all for today"));
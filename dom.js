let btn = document.querySelector('#button');

function showTarget(event) {
    console.log(event.target);
}

document.body.addEventListener('click', showTarget);

function btnCallback(e) {
    console.log(`${e.x} : ${e.y}`);
    console.log(`${e.clientX} : ${e.clientY}`);
    // console.log(e.target);
}

btn.addEventListener('click', btnCallback);

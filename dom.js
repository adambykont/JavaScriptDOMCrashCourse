let btn = document.querySelector('#button');

let counter = 0;

function btnCallback(e) {
    console.log(`${e.x} : ${e.y}`);
}

btn.addEventListener('click', btnCallback);

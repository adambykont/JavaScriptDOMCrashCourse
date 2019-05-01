let btn = document.querySelector('#button');

let counter = 0;

function btnCallback() {
    let title = document.querySelector('#header-title');
    let msg;
    if (counter % 2 === 0) {
        msg = counter;
    } else {
        msg = new Date().getHours();
    }
    counter++;
    title.textContent = `Clicked ${msg} times`;
}

btn.addEventListener('click', btnCallback);

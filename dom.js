let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

function keycallback(e) {
    let value = e.target.value;
    let header = document.querySelector('#main-header');
    header.textContent = value;
}

itemInput.addEventListener('keypress', keycallback);
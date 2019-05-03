const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');

function addItem(e) {
    e.preventDefault();

    const newItem = document.querySelector('#item');

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem.value));
    itemList.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    newItem.value = '';
}

form.addEventListener('submit', addItem);
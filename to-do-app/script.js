const listContainer = document.querySelector('.list-container'); // Corrected ID selector to class selector

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

document.getElementById('btn').addEventListener('click', addTask);

function addTask() {
    const inputBox = document.getElementById('input-box');

    if (inputBox.value === '') {
        alert("You must add some task");
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input box after adding task
        saveData();
    }
}

listContainer.addEventListener('click', function (e) { // Changed ID selector to variable name
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

showTask();

let cardCount = 0;

function addCard() {
    cardCount++;

    const cardContainer = document.getElementById("lists");

    const card = document.createElement("div");
    card.className = "card";

    const heading = document.createElement("h3");
    heading.innerHTML = `List Card ${cardCount}<span class="delete-card" onclick="deleteCard(this)">X</span>`;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add an item";

    const addButton = document.createElement("button");
    addButton.className = 'additembtn';
    addButton.innerHTML = "Add <span>&plus;</span>";
    addButton.onclick = function () {
        addItem(this);
    };

    const addToPlanbtn = document.createElement("a");
    addToPlanbtn.href = '..//HTMLs/userProfile.html';
    addToPlanbtn.onclick = function () {
        redirect(this)
    };
    addToPlanbtn.className = 'addToPlanbtn';
    addToPlanbtn.innerHTML = 'add to plan';

    const ul = document.createElement("ul");
    ul.className = 'list';

    card.appendChild(heading);
    card.appendChild(input);
    card.appendChild(addButton);
    card.appendChild(addToPlanbtn);
    card.appendChild(ul);

    cardContainer.appendChild(card);
}

function deleteCard(element) {
    const card = element.parentElement.parentElement;
    const cardContainer = card.parentElement;
    cardContainer.removeChild(card);
}

function addItem(element) {
    const input = element.previousElementSibling;
    const item = input.value;
    input.value = "";

    const list = element.nextElementSibling.nextElementSibling;
    const listItem = document.createElement("li");
    listItem.innerHTML = item + '<span class="delete" onclick="deleteItem(this)">X</span>';
    list.appendChild(listItem);
}

function deleteItem(element) {
    const listItem = element.parentElement;
    const list = listItem.parentElement;
    list.removeChild(listItem);
}


function redirect(a) {
    const listCard = a.closest('.card');

    const listName = listCard.querySelector('h3').textContent;
    const listItems = listCard.querySelector('.list').innerHTML;

    localStorage.setItem('selectedListName', listName);
    localStorage.setItem('selectedListItems', listItems);
}

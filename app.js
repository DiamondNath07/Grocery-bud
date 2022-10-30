const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryItem = document.querySelector('.grocery-item');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-list');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// add event listeners

form.addEventListener('submit', addItem);

// functions

function addItem(e) {
  e.preventDefault();
  const value = groceryItem.value;
  const id = new Date().getTime().toString();
  if (!value == '' && editFlag === false) {
    const element = document.createElement('article');
    element.classList.add('listed-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
                <p class="selected-item">${value}</p>

            <span class="list-btns">
              <button class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="close-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </span>
    `;
    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
  } else if (!value == '' && editFlag === true) {
    console.log('edit item');
  } else {
    displayAlert('please enter value', 'danger');
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

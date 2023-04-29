const itemInput = document.getElementById("item");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addItem);

function addItem() {
  const itemValue = itemInput.value;
  if (!itemValue) return;
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `
    <span>${itemValue}</span>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(todoItem);
  itemInput.value = "";
  const deleteBtn = todoItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
}

function deleteItem(event) {
  const todoItem = event.target.parentElement;
  todoList.removeChild(todoItem);
}

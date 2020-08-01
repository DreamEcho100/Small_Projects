const todoInp = document.querySelector(".todo-inp");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", () => {
	todoInp.focus();
})
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteAndCheck);

function addTodo(e) {

	e.preventDefault();
	if (todoInp.value === "") return;
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInp.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const completedBtn = document.createElement("button");
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add("completed-btn");
	todoDiv.appendChild(completedBtn);

	const trashBtn = document.createElement("button");
	trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
	trashBtn.classList.add("trash-btn");
	todoDiv.appendChild(trashBtn);

	todoList.appendChild(todoDiv);

	todoInp.value = "";
	todoInp.focus();

}

function deleteAndCheck(e) {
	const item = e.target;

	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement
		todo.classList.add("inpFall");
		todo.addEventListener("transitionend", () => todo.remove(item));
	}

	if (item.classList[0] === "completed-btn") item.parentElement.classList.toggle('completed');

}
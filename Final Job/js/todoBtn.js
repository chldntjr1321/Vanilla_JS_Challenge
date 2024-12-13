const todoContainer = document.querySelector(".container-todo");
const todobtn = document.querySelector(".ShowTodo");


function todoVisibile() {
    if (todoContainer.classList.contains("visible")) {
        todoContainer.classList.remove("visible");
        todoContainer.classList.add("hidden");
    } else {
        todoContainer.classList.remove("hidden");
        todoContainer.classList.add("visible");
    }
}

todobtn.addEventListener("click", todoVisibile);

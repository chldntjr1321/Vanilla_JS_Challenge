const todoBox = document.querySelector(".container-todo");
const todobtn = document.querySelector(".ShowTodo");

const CAN_SEE = "visible";
const CANNOT_SEE = "hidden";


function todoVisibile() {
    if (todoBox.classList.contains(CAN_SEE)) {
        todoBox.classList.remove(CAN_SEE);
        todoBox.classList.add(CANNOT_SEE);
    } else {
        todoBox.classList.remove(CANNOT_SEE);
        todoBox.classList.add(CAN_SEE);
    }
}

todobtn.addEventListener("click", todoVisibile);

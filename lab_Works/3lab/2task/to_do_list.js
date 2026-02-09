const input = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");

function AddTask(){
    const text = input.value.trim();
    if(text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const delete_buttton = document.createElement("button");
    delete_buttton.textContent = "Delete";
    delete_buttton.className = "delete-button"

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delete_buttton);
    todoList.appendChild(li);

    input.value = "";

    checkbox.addEventListener("change", () => {
        li.classList.toggle("done");
    });

    delete_buttton.addEventListener("click", () => {
        todoList.removeChild(li);
    });
}

addBtn.addEventListener("click", AddTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        AddTask();
    }
});
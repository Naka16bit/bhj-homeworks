const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");

tasksAdd.addEventListener("click", (e) => {
    e.preventDefault();
    if (taskInput.value.trim() === "") {
        taskInput.value = "";
        return;
    }

    tasksList.insertAdjacentHTML("beforeEnd", 
    `<div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    taskInput.value = "";

    const taskRemove = tasksList.querySelector(".task:last-child a");
    taskRemove.addEventListener("click", (e) => {
        e.preventDefault();
        taskRemove.closest(".task").remove();
    });
    
});
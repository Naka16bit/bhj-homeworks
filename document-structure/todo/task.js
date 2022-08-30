const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');

tasksAdd.addEventListener("click", (e) => {    
    if (taskInput.value === "") return;
    
    tasksList.innerHTML += 
    `<div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove" onclick="this.closest('.task').outerHTML = ''">&times;</a>
    </div>`;
    taskInput.value = "";
    e.preventDefault();
});
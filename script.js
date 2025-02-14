document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if(taskText) {
            // alert('Please enter a task');
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            const newBtn = document.createElement('button');
            newBtn.textContent = "Remove";
            newBtn.classList.add('remove-btn');
            newBtn.onclick = function () {
            taskList.newBtn.remove();
            newBtn.appendChild(newTask);
            taskList.appendChild(newBtn);
            taskInput.value = '';
            };
        } else {
            alert('Please enter a task');
        };
        addButton.addEventListener('click', addTask());
        taskInput.addEventListener('keypress', function (event) {
            if(event.key == 'Enter') {
                addButton.addEventListener('click', addTask());
            }
        });
    }
    addButton.onclick = addTask();
});
// addButton.onclick = addTask();
document.addEventListener('DOMContentLoaded', addTask());
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const storedTasks = localStorage.getItem('tasks') 
    storedTasks = JSON.parse()  || '[]';

    storedTasks.forEach(taskText => 
        addTask(taskText, false));

    function addTask(taskText, save = true) {
        const taskText = taskInput.value.trim();
        if(taskText === '') {
            alert('Please enter a task');
            return;
            }
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className('remove-btn');

        removeBtn.onclick = function () {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(removeBtn);
        taskList.appendChild(newTask);
        taskInput.value = '';
        
        addButton.addEventListener('click', addTask);

        taskInput.addEventListener('keypress', function(event) {
            if(event.key === 'Enter') {
                addTask();
            }
        });
    }
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
    addButton.onclick = addTask();
    addTask() = storage;

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        // Other initialization code
    });
});
// addButton.onclick = addTask();
// document.addEventListener('DOMContentLoaded', addTask());
// addTask();

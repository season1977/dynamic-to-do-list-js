document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });
});

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add task to DOM and optionally save to localStorage
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-button');
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        removeTaskFromStorage(taskText);
    });

    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Remove task from localStorage
function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

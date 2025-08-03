// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // ✅ Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get user input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li'); // Create list item
        li.textContent = taskText;

        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove this task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn); // Add button to list item
        taskList.appendChild(li); // Add list item to task list

        taskInput.value = ""; // Clear input
    }

    // ✅ Event listeners
    addButton.addEventListener('click', addTask); // Add button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

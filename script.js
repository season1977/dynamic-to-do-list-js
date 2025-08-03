document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task-added"); // ✅ using classList.add

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    });
});


let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

let tasks = [];

// Function to add a task
function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
}

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = "";

    let remaining = 0;

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        // Create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;

        // Create task text
        let span = document.createElement("span");
        span.textContent = tasks[i].text;

        // Mark task as completed
        if (tasks[i].completed) {
            li.classList.add("completed");
        } else {
            remaining++;
        }

        checkbox.addEventListener("change", function() {
            tasks[i].completed = checkbox.checked;
            displayTasks();
        });

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });

        // Add elements to the task
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Add task to the page
        taskList.appendChild(li);
    }

    // Update remaining task count
    taskCount.textContent = remaining + " tasks remaining";
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter is pressed
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

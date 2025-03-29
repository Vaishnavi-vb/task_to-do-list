// Get the necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn">Remove</button>
        `;
        
        // Add event listener to remove the task
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        // Add the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}

// Add a task when the "Add Task" button is clicked
addTaskBtn.addEventListener('click', addTask);

// Allow the user to press Enter to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

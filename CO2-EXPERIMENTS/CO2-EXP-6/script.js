/* =====================================================
   EXPERIMENT 6
   DYNAMIC TO-DO LIST APPLICATION
===================================================== */


/* ================= TASK ARRAY ================= */

let tasks = [

    {
        id: 1,
        title: "Complete Web Technology Assignment",
        priority: "High",
        completed: false
    },

    {
        id: 2,
        title: "Study Cloud Computing",
        priority: "Medium",
        completed: false
    }

];


/* ================= VARIABLES ================= */

let currentFilter = "all";


const taskInput =
    document.getElementById("taskInput");


const priorityInput =
    document.getElementById("priorityInput");


const addButton =
    document.getElementById("addButton");


const taskList =
    document.getElementById("taskList");


const emptyMessage =
    document.getElementById("emptyMessage");


const taskCount =
    document.getElementById("taskCount");


/* ================= DISPLAY TASKS ================= */

function displayTasks() {

    taskList.innerHTML = "";


    let filteredTasks = tasks;


    /* FILTER USING CONDITIONAL STATEMENT */

    if (currentFilter === "pending") {

        filteredTasks =
            tasks.filter(
                task => task.completed === false
            );

    }

    else if (currentFilter === "completed") {

        filteredTasks =
            tasks.filter(
                task => task.completed === true
            );

    }


    /* EMPTY MESSAGE */

    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    }

    else {

        emptyMessage.style.display = "none";

    }


    /* LOOP THROUGH ARRAY */

    for (
        let i = 0;
        i < filteredTasks.length;
        i++
    ) {

        const task =
            filteredTasks[i];


        /* CREATE DOM ELEMENT */

        const li =
            document.createElement("li");


        li.className = "task-item";


        if (task.completed) {

            li.classList.add("completed");

        }


        li.innerHTML = `

            <button
                class="check-button"
                onclick="toggleTask(${task.id})">

                ${task.completed ? "✓" : ""}

            </button>


            <div class="task-content">

                <span class="task-title">
                    ${task.title}
                </span>

                <span class="priority ${task.priority}">
                    ${task.priority} Priority
                </span>

            </div>


            <div class="actions">

                <button
                    class="edit-btn"
                    onclick="editTask(${task.id})">

                    ✏ Edit

                </button>


                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    🗑 Delete

                </button>

            </div>

        `;


        taskList.appendChild(li);

    }


    updateTaskCount();

}



/* ================= ADD TASK ================= */

function addTask() {


    const title =
        taskInput.value.trim();


    const priority =
        priorityInput.value;


    /* VALIDATION */

    if (title === "") {

        alert("Please enter a task.");

        taskInput.focus();

        return;

    }


    /* CREATE OBJECT */

    const newTask = {

        id: Date.now(),

        title: title,

        priority: priority,

        completed: false

    };


    /* ADD OBJECT TO ARRAY */

    tasks.push(newTask);


    /* CLEAR INPUT */

    taskInput.value = "";


    priorityInput.value = "Medium";


    /* DISPLAY */

    displayTasks();


    taskInput.focus();

}


/* ================= EDIT TASK ================= */

function editTask(id) {


    /* FIND TASK */

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) {

        return;

    }


    /* GET NEW TITLE */

    const newTitle =
        prompt(
            "Edit your task:",
            task.title
        );


    if (
        newTitle !== null &&
        newTitle.trim() !== ""
    ) {

        task.title =
            newTitle.trim();


        displayTasks();

    }

}


/* ================= DELETE TASK ================= */

function deleteTask(id) {


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this task?"
        );


    if (!confirmDelete) {

        return;

    }


    /* REMOVE TASK FROM ARRAY */

    tasks =
        tasks.filter(
            task => task.id !== id
        );


    displayTasks();

}


/* ================= COMPLETE TASK ================= */

function toggleTask(id) {


    const task =
        tasks.find(
            task => task.id === id
        );


    if (task) {

        task.completed =
            !task.completed;

    }


    displayTasks();

}


/* ================= TASK COUNT ================= */

function updateTaskCount() {


    const pendingTasks =
        tasks.filter(
            task => task.completed === false
        );


    taskCount.textContent =
        pendingTasks.length;

}


/* ================= ADD BUTTON EVENT ================= */

addButton.addEventListener(
    "click",
    addTask
);


/* ================= ENTER KEY EVENT ================= */

taskInput.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            addTask();

        }

    }
);


/* ================= FILTER EVENTS ================= */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                /* REMOVE ACTIVE CLASS */

                filterButtons.forEach(
                    btn =>
                        btn.classList.remove("active")
                );


                /* ADD ACTIVE CLASS */

                this.classList.add("active");


                /* UPDATE FILTER */

                currentFilter =
                    this.dataset.filter;


                displayTasks();

            }
        );

    }
);


/* ================= INITIAL DISPLAY ================= */

displayTasks();
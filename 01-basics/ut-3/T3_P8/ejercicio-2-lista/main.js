// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const noTasksMessage = document.getElementById('noTasksMessage');
const taskCount = document.getElementById('taskCount');

// Cargar tareas almacenadas en el LocalStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para renderizar tareas
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn-delete';
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
            updateTaskCount();
            saveTasksToLocalStorage();
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    updateTaskCount();
    saveTasksToLocalStorage();
}

// Función para actualizar el contador de tareas
function updateTaskCount() {
    taskCount.textContent = tasks.length;
    if (tasks.length === 0) {
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
    }
}

// Agregar tarea al hacer clic en el botón "+"
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
});

// Almacenar tareas en el LocalStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Renderizar tareas almacenadas al cargar la página
renderTasks();

import { initialTasks } from "./initialData.js";
import { storage } from "./storage.js";
import { taskManager } from "./taskFunctions.js";

let tasks = [];

function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;
  taskDiv.onclick = () => openTaskModal(task, false);
  return taskDiv;
}

function renderTasks() {
  const containers = {
    todo: document.querySelector('.column-div[data-status="todo"] .tasks-container'),
    doing: document.querySelector('.column-div[data-status="doing"] .tasks-container'),
    done: document.querySelector('.column-div[data-status="done"] .tasks-container')
  };

  // Clear all containers
  Object.values(containers).forEach(c => { if(c) c.innerHTML = ""; });

  tasks.forEach(task => {
    const container = containers[task.status];
    if (container) {
      container.appendChild(createTaskElement(task));
    }
  });
}

function openTaskModal(task = {}, isNew = true) {
  const modal = document.getElementById("task-modal");
  document.getElementById("modal-title-text").textContent = isNew ? "Add New Task" : "Task Details";
  document.getElementById("create-task-btn").style.display = isNew ? "block" : "none";

  document.getElementById("task-title").value = task.title || "";
  document.getElementById("task-desc").value = task.description || "";
  document.getElementById("task-status").value = task.status || "todo";

  modal.showModal();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  const newTask = taskManager.createNewTask(data);
  tasks.push(newTask);
  
  storage.saveTasks(tasks);
  renderTasks();
  
  event.target.reset();
  document.getElementById("task-modal").close();
}

function initTaskBoard() {
  // 1. Load tasks from storage (or initialData if first time)
  tasks = storage.getTasks(initialTasks);

  // 2. Add Task Button Wire-up
  const addBtn = document.getElementById("add-task-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => openTaskModal({}, true));
  }

  // 3. Modal Close Wire-up
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => document.getElementById("task-modal").close());
  }

  // 4. Form Submit Wire-up
  const taskForm = document.getElementById("task-form");
  if (taskForm) {
    taskForm.addEventListener("submit", handleFormSubmit);
  }

  // 5. Render the loaded data
  renderTasks();
}

// Ensure the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTaskBoard);
} else {
  initTaskBoard();
}
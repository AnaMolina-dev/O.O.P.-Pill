class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
    this.render();
  }

  delete(index) {
    this.tasks.splice(index, 1);
    this.render();
  }

  toggle(index) {
    this.tasks[index].toggle();
    this.render();
  }

  render() {
    const listEl = document.getElementById("taskList");
    listEl.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      li.innerHTML = `
        <span>${task.title}</span>
        <div>
          <button onclick="taskList.toggle(${index})">Toggle</button>
          <button onclick="taskList.delete(${index})">Delete</button>
        </div>
      `;

      listEl.appendChild(li);
    });
  }
}

const taskList = new TaskList();

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (title !== "") {
    const task = new Task(title);
    taskList.add(task);
    input.value = "";
  }
});

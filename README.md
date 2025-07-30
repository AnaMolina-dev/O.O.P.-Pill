# O.O.P.-Pill
Informative Pill about Object Oriented Programming
# 📝 My Task List

A simple app to create, mark, and delete tasks using **JavaScript** and **Object-Oriented Programming (OOP)**. Perfect for practicing classes, methods, and DOM interaction in a web project.

## 🚀 Features

- Add tasks with a button
- Mark tasks as completed
- Remove tasks from the list
- Simple visual interface with HTML and CSS
- Organized code using JavaScript classes

## 📁 Project Structure


my-project/ ├── index.html // User Interface ├── style.css // Styling ├── script.js // Logic with OOP └── README.md // Project Info

## 🧠 Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)

## 🎯 How to Use

1. Clone the repository:
git clone https://github.com/your-username/my-project.git

2. Open `index.html` in your browser.

3. Write tasks in the input field and click "Add Task".

## 🧱 Highlighted Code

Example of a `Task` class:

```javascript
class Task {
constructor(title) {
 this.title = title;
 this.completed = false;
}

toggle() {
 this.completed = !this.completed;
}
}

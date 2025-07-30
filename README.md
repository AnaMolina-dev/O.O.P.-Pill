# O.O.P.-Pill
Informative Pill about Object Oriented Programming
# 📝 My Task List

Una aplicación simple para crear, marcar y eliminar tareas usando **JavaScript** y **Programación Orientada a Objetos (POO)**. Ideal para practicar clases, métodos, y DOM en proyectos web.

## 🚀 Funcionalidades

- Agregar tareas con un botón
- Marcar tareas como completadas
- Eliminar tareas de la lista
- Interfaz visual con HTML y CSS
- Código organizado con clases de JavaScript

## 📁 Estructura del proyecto

mi-proyecto/ ├── index.html // Interfaz de usuario ├── style.css // Estilos visuales ├── script.js // Lógica con POO └── README.md // Información del proyecto

## 🧠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## 🎯 Cómo usarlo

1. Clona el repositorio:
git clone https://github.com/tu-usuario/mi-proyecto.git


2. Abre el archivo `index.html` en tu navegador.

3. Escribe tareas en el campo de texto y haz clic en "Add Task".

## 🧱 Código destacado

Ejemplo de clase `Task`:

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

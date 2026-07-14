// 1. Capturas el elemento de la fecha que agregaste en el HTML
const todoDate = document.getElementById('todo-date');
const completedCounter = document.getElementById('completed-counter'); // Para el comodín

// 2. En el evento del formulario ('submit'), capturas el valor de la fecha
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    const taskDate = todoDate.value; // Guardas la fecha ingresada

    if (!taskText || !taskDate) return;

    const newTodo = {
        id: Date.now(),
        text: taskText,
        date: formatDate(taskDate), // Tu parte: Guardas la fecha formateada en el objeto
        completed: false
    };

    todos.push(newTodo);
    renderTodos();
    todoForm.reset();
});

// Función de apoyo para que la fecha se vea ordenada (Ej: "13 jul 2026")
function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateObj = new Date(dateString + 'T00:00:00'); 
    return dateObj.toLocaleDateString('es-ES', options);
}

// 3. Tu parte (Comodín): Función para calcular y actualizar el contador en pantalla
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    completedCounter.textContent = `Terminadas: ${completed} / ${total}`;
}

// 4. Asegúrate de que en la función renderTodos() se dibuje la fecha y se llame a tu contador
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="todo-item-content">
                <span class="todo-text">${todo.text}</span>
                <!-- AQUÍ SE MUESTRA TU FECHA -->
                <span class="todo-date-badge">⏱ ${todo.date}</span> 
            </div>
            <div class="todo-actions">
                <button class="btn-action btn-complete" onclick="toggleComplete(${todo.id})">✓</button>
                <button class="btn-action btn-delete" onclick="deleteTodo(${todo.id})">🗑</button>
            </div>
        `;
        todoList.appendChild(li);
    });

    updateStats(); // Tu parte (Comodín): Llamas a la función para actualizar el contador
}
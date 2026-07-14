document.addEventListener("DOMContentLoaded", () => {
    // 1. Corrección de IDs para enlazar correctamente con el HTML
    const entradaTarea = document.getElementById("task-input");
    const entradaFecha = document.getElementById("task-date"); // <- Tu parte
    const botonAgregar = document.getElementById("add-task-btn");
    const listaTareas = document.getElementById("task-list");

    // 2. Elementos del contador (Tu parte - Comodín)
    const contadorCompletadas = document.getElementById("completed-count");
    const contadorTotal = document.getElementById("total-count");

    // 3. Función para actualizar el contador dinámicamente (Tu parte - Comodín)
    function actualizarContador() {
        const totalTareas = listaTareas.querySelectorAll("li").length;
        // Cuenta las tareas que tengan la clase "completada"
        const tareasCompletadas = listaTareas.querySelectorAll("li.completada").length;

        contadorTotal.textContent = totalTareas;
        contadorCompletadas.textContent = tareasCompletadas;
    }

    function agregarTarea() {
        const textoTarea = entradaTarea.value.trim();
        const fechaTarea = entradaFecha.value; // <- Tu parte: Capturar la fecha

        if (textoTarea === "") {
            alert("Escribe una tarea antes de agregarla.");
            entradaTarea.focus();
            return;
        }

        // Validación para que no agreguen tareas sin fecha
        if (fechaTarea === "") {
            alert("Por favor, selecciona una fecha de vencimiento.");
            entradaFecha.focus();
            return;
        }

        const nuevaTarea = document.createElement("li");
        
        // Tu parte: Insertar el texto de la tarea junto con la fecha de vencimiento
        nuevaTarea.innerHTML = `
            <span class="tarea-texto">${textoTarea}</span>
            <span class="tarea-fecha" style="margin-left: 10px; color: #888; font-size: 0.9em;">
                📅 ${fechaTarea}
            </span>
        `;

        // Pequeña lógica para que puedas probar tu contador: 
        // Al hacer clic en la tarea, se marca/desmarca como completada
        nuevaTarea.addEventListener("click", () => {
            nuevaTarea.classList.toggle("completada");
            // Se ve visualmente tachada (puedes agregar esto en el CSS de tus compañeros)
            nuevaTarea.style.textDecoration = nuevaTarea.classList.contains("completada") ? "line-through" : "none";
            actualizarContador(); // Actualizas el contador al marcar/desmarcar
        });

        listaTareas.appendChild(nuevaTarea);

        // Limpiar campos después de agregar
        entradaTarea.value = "";
        entradaFecha.value = "";
        
        // Actualizar el contador total tras agregar una nueva tarea
        actualizarContador(); 
        
        entradaTarea.focus();
    }

    botonAgregar.addEventListener("click", agregarTarea);

    entradaTarea.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter") {
            agregarTarea();
        }
    });
});
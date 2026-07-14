document.addEventListener("DOMContentLoaded", () => {
    const entradaTarea = document.getElementById("entradaTarea");
    const botonAgregar = document.getElementById("botonAgregar");
    const listaTareas = document.getElementById("listaTareas");

    function agregarTarea() {
        const textoTarea = entradaTarea.value.trim();

        if (textoTarea === "") {
            alert("Escribe una tarea antes de agregarla.");
            entradaTarea.focus();
            return;
        }

        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        listaTareas.appendChild(nuevaTarea);

        entradaTarea.value = "";
        entradaTarea.focus();
    }

    botonAgregar.addEventListener("click", agregarTarea);

    entradaTarea.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter") {
            agregarTarea();
        }
    });
    
});
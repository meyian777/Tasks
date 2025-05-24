function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Marcar como completado al hacer clic
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    // Eliminar al hacer doble clic
    li.addEventListener("dblclick", () => {
      taskList.removeChild(li);
    });
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
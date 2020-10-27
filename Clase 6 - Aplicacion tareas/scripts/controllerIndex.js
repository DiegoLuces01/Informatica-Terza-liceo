let numParametros = Object.keys(parameters).length;

if (numParametros == 4) {
  console.log("Se va a crear una nueva tarea");
  addTarea(
    parameters.fecha,
    parameters.materia,
    parameters.descripcion,
    parameters.realizada
  );
} else if (numParametros == 5) {
  modifyTarea(
    parameters.fecha,
    parameters.materia,
    parameters.descripcion,
    parameters.realizada
  );
}
window.history.pushState({}, document.title, "index.html");

let deleteForm = document.querySelector("#deleteForm");
deleteForm.onsubmit = () => {
  deleteTarea(document.querySelector("#deleteForm input[name='id']").value);
  updateTableHtml(tareas);
};

updateTableHtml(tareas);

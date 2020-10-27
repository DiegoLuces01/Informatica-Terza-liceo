let numParametros = Object.keys(parameters).length;
if (numParametros == 1) {
  // console.log(`Se va a editar la tarea número ${parameters.id}`);

  let tarea = getTarea(parameters.id);
  document.querySelector("input[name='id']").value = tarea.id;
  document.querySelector("input[name='fecha']").value = tarea.fecha;
  document.querySelector("input[name='materia']").value = tarea.materia;
  document.querySelector("textarea[name='descripcion']").value =
    tarea.descripcion;
  if (tarea.realizada == "No")
    document.querySelector("#radioNo").checked = true;
  else document.querySelector("#radioSi").checked = true;
}

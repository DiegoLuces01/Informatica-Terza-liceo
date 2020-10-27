const tabla = document.querySelector("#tablaTareas");
function updateTableHtml(array) {
  tabla.innerHTML = "";
  if (array.length > 0) {
    let headers = Object.keys(array[0]);
    tabla.appendChild(newRow(headers, true));
    for (row of array) {
      let data = Object.values(row);
      tabla.appendChild(newRow(data));
    }
  }
}
function newRow(data, header = false) {
  let row = document.createElement("tr");
  let elemName = header ? "th" : "td";
  for (value of data) {
    let cell = document.createElement(elemName);
    cell.innerHTML = value;
    row.appendChild(cell);
  }
  return row;
}

# Aplicación tareas

Aplicación que permite llevar el registro de las tareas que se deben hacer. Provee la siguiente funcionalidad:

- Ver una tabla de tareas, cada una con id, fecha, materia, descripción, y si ya fue realizada o no.
- Añadir una tarea nueva, especificando todos los atributos excepto el id, éste se asigna de manera automática tomando el siguiente disponible.
- Editar una tarea dado el id. Es posible cambiar cualquiera de las propiedades de una tarea específica, excepto el id.
- Eliminar una tarea.

# Iniciando

Clone este repositorio a su computador, para esto haga click en el botón clone....

# Entendiendo

En el código base se encuentran varios archivos html, css y js.

## HTML

- `index.html`: Este es el archivo principal, es este se muestra la tabla de tareas al usuario, se le da la posibilidad de crear una tarea nueva, editar y eliminar.
- `add.html`: Este archivo le permite al usuario llenar los campos necesarios para crear una tarea nueva.
- `edit.html`: Este archivo le permite al usuario cambiar los campos que desee en una tarea ya creada. Se llena automáticamente con los valores de la tarea a editar.

## JS

Dentro de la carpeta scripts se encuentran 5 archivos que le dan la funcionalidad a la página:

- `dom.js`: Este archivo crea una tabla de html a partir de un array de javascript. Tiene la definición de la función `updateTableHtml`, la cual actualiza la tabla con los valores del array.
- `tareas.js`: Este archivo crea la variable tareas a partir del almacenamiento local si está disponible. Provee las funciones `addTarea`, `deleteTarea`, `modifyTarea` y `getTarea`. Éstas permite añadir, eliminar, modificar y obtener tareas. La implementación de estas funciones es su tarea.
- `readParameters.js`: Este archivo lee los parámetros de la solicitud GET actual. Lo hace a partir de la url actual. Guarda todos los parámetros en un objeto llamado `parameters`.
- `controllerIndex.js`: Este archivo se encarga de darle funcionalidad a la página `index.html`:
  - Determina el número de parámetros recibidos, y de acuerdo a eso hace diferentes acciones:
    - 4 parámetros: crea una nueva tarea. Los parámetros recibidos deben ser materia, descripcion, fecha y realizada.
    - 5 parámetros: edita una tarea que ya existe. Los parámetros recibidos deben ser id, materia, descripcion, fecha y realizada.
  - Brinda la funcionalidad para eliminar una tarea cuando el usuario haga click en el botón para eliminar.
- `controllerEdit.js`: Le da funcionalidad a la página `edit.html`. Lee el número de parámetros recibidos, si es exactamente 1 entonces procede a llenar el formulario con los datos actuales de la tarea cuyo id fue pasado como parámetro. Esto permite al usuario no tener que arrancar desde cero cuando se hace la edición de una tarea.

# Especificación

Completar la implementación de la aplicación. Debe completar los siguientes elementos:

1. `tareas.js`: Debe completar la implementación de las funciones `addTarea`, `deleteTarea`, `modifyTarea` y `getTarea`. Estas funciones añaden, eliminan, modifican y obtienen una tarea. Debe seguir las indicaciones que se encuentran en el archivo.
2. `controllerIndex.js`: Debe hacer el llamado a las funciones addTarea y modifyTarea en los lugares adecuados y con los argumentos adecuados, de manera que los parámetros recibidos sean utilizados.

3. `styles.css`: Debe darle estilo a su aplicación para que se vea bien. Puede usar por ejempo: colores, tipos de letra, bordes, padding, márgenes que considere apropiados. Si lo deseea puede usar css grid. Puede usar [bootstrap](https://getbootstrap.com/) si lo desea.

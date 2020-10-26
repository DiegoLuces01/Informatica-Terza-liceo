img = document.querySelector("#imgAPI");
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=2uPghFtuIyGCNKsFk4fitHKbF73wwsh0818Xh646"
  )
  .then(function (response) {
    // Esto se ejecuta al tener éxito con la solicitud
    console.log(response.data.url);
    img.src = response.data.url;
  })
  .catch(function (error) {
    // Esto se ejecuta cuando hay un error con la solicitud
    console.log(error);
  })
  .then(function () {
    // Esto se ejecuta siempre
  });
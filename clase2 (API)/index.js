img = document.querySelector("#btnapi");
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=2uPghFtuIyGCNKsFk4fitHKbF73wwsh0818Xh646"
  )
  .then(function (response) {

    console.log(response.data.url);
    img.src = response.data.url;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  btnapi = document.querySelector("#btnapi");
  img = document.querySelector("#imagen")
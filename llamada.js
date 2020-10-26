btn = document.querySelector("#btnAPI");
img = document.querySelector("#imgAPI");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=2uPghFtuIyGCNKsFk4fitHKbF73wwsh0818Xh646"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;
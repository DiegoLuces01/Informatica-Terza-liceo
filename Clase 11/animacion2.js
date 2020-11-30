let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  corredor:"https://images.vexels.com/media/users/3/135373/isolated/preview/50d9d491e0583e3bece5f7a712f88a6b-jugador-de-beisbol-corriendo-silueta-by-vexels.png",
  pelota: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baseball_%28crop%29.png/1200px-Baseball_%28crop%29.png",
  lanzador:"https://images.vexels.com/media/users/3/135334/isolated/preview/e0812b4b64e5e9b5e52202e892a20f07-bateo-de-beisbol-silueta-1-by-vexels.png",
};
let x = 50;
let y = 300;
let x2 =0;
let y2= 300;
let dX=5;
let dY=-5;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;
function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x2=x2+dX;
  y2=y2+dY
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.pelota, x, y, 30, 30);
  ctx.drawImage(images.lanzador, 20, 280, 120, 120);
  ctx.drawImage(images.corredor, x2, y2, 100, 100)
}
// La variable images contiene las imagenes cargadas
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);
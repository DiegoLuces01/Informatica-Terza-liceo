let canvas = document.querySelector("#funciones");
let ctx = canvas.getContext("2d");

// Vamos  a hacer funciones
function circulo(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}

// ctx.fillStyle = "rgba(0, 0, 255,0.3)";
// for (let xC = 20; xC <= 380; xC += 20) {
//   for (let yC = 20; yC <= 380; yC += 20) {
//     // circulo(xC, yC, 20);
//     rectangulo(xC, yC, 20, 20);
//   }
// }
for (let nFila = 0; nFila < 8; nFila++) {
  yC = 0 + nFila * 50;
  if (nFila%2 == 0) {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  } else {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  }
}
for (let nFila = 0; nFila < 8; nFila++) {
  xC = 0 + nFila * 50;
  if (nFila % 2 == 0) 
  {
    for (let yC = 50; yC <= 350; yC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  } else {
    for (let yC = 50; yC <= 350; yC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  }
}
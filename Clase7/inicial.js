let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,200)";
ctx.beginPath(); 
ctx.fill()
ctx.moveTo(225, 200);
ctx.lineTo(200, 250);
ctx.lineTo(175, 200);

ctx.stroke();

// Arco de circunferencia
ctx.beginPath();
ctx.arc(200, 50, 25, 0, Math.PI, true);
ctx.lineTo(225, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeRect(175, 50, 50, 150);


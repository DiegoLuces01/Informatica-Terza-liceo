import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let particulas = []
let barramedio = {
  x:0,
  y:0,
  vX: 50,
  vY: 20,
  draw:function(){
ctx.fillStyle = "white";
ctx.fillRect(290, 0, 10, 3040)


      ctx.beginPath();
    ctx.moveTo(this.x +20, this.y);
      ctx.lineTo(this.x+10, this.y+-1220);
      ctx.lineTo(this.x+0, this.y+0);
      ctx.stroke();
  },
  move:function(){
      this.x = this.x + this.vX * dT/500;
      this.y = this.y + this.vY * dT/500;     
  }

}
let dx = 2;
let dy = -2;
let puntaje1= 0;
let puntaje2= 0;
let barrita  = {
    x:0,
    y:0,
    x2:32,
    y2:32,
    vX: 20,
    vY: 20,
    draw:function(){
  ctx.fillStyle = "white";
  ctx.fillRect(this.x, this.y, 20, 90)
    },
    move:function(){
        this.x = this.x + this.vX * dT/300;
        this.y = this.y + this.vY * dT/300;     
    }

}
let barrita1 = Object.create(barrita)
 barrita1.x = 7
barrita1.y = 160;
barrita1.vX = 40;
barrita1.vY = -40;

let barrita2 = Object.create(barrita)
barrita2.x = 570;
barrita2.y = 160;
barrita2.vX = 0;
barrita2.vY = 0;






let particula = {
  
    r:10,
    draw:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "white"
        ctx.stroke();
        ctx.fill(); 
       
    },
    move:function(){
        this.x = this.x + this.vX * dT/500;
        this.y = this.y + this.vY * dT/500;

         //rebote con la barrita 2
        if(this.x>barrita2.x && this.y>barrita2.y && this.y <barrita2.y + 150)
        {
          console.log("chocó2")
          if(this.vX>0){
              this.vX=-this.vX
          }
          //rebote con la barrita 1
          if(this.x<barrita1.x && this.y>barrita1.y && this.y <barrita1.y + 100){
            console.log("choco1")
            if(this.vX<0){
              this.vX=-this.vX
            }
          }
          
        }
        if(this.y<10){
          this.vY=-this.vY
        }
        if(this.y>390){
          this.vY=-this.vY
        }
        if (this.x< 6 && this.x>5) {
          puntaje1 = puntaje1 + 1;
          document.querySelector("#puntaje1").innerHTML = puntaje1;
         
        }
        if(puntaje1>20){
       console.log("Jugador 1 Gana")
        }
        if (this.x<600 && this.x>601) {
          puntaje2 = puntaje2 + 1;
          document.querySelector("#puntaje2").innerHTML = puntaje2;
         
        }
        if(puntaje2>20){
          console.log("Jugador 2 Gana")
           }
      }
}

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 600, 400);
    for (let particula of particulas){ 
        
      
    particula.draw() 
    
    particula.move(
    )


    }
    barrita1.draw()
 barrita2.draw()
   barramedio.draw();
 
    
    
}
run()
function crearParticula(){
    let nuevaParticula = Object.create(particula)
    nuevaParticula.x = 300
    nuevaParticula.y = 200
    let ang = 2 * Math.PI * Math.random()
    nuevaParticula.vX = 50 * Math.cos(ang) * Math.random() 
    nuevaParticula.vY = 50 * Math.sin(ang) * Math.random()
    particulas.push(nuevaParticula)
    console.log(particulas)
}
window.onkeydown = function (evento) {
    if (evento.key == "i") {
        barrita2.y = barrita2.y  - 10;
    }
    if (evento.key == "k") {
      barrita2.y = barrita2.y + 10;
    }
    if (evento.key == "w") {
      barrita1.y = barrita1.y  - 10;
  }
  if (evento.key == "s") {
    barrita1.y = barrita1.y + 10;
  }
  };
run()
canvas.onclick = crearParticula
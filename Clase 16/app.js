import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let particulas = []

let particula = {
    r:20,
    draw:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(30,30,30,30.30)"
        ctx.stroke();
        ctx.fill();
    },
    move:function(){
        this.x = this.x + this.vX * dT/500;
        this.y = this.y + this.vY * dT/500;
    }
}
drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    for (let particula of particulas){
        particula.draw()
        particula.move()
    }
}
run()
function crearParticula(click){
    let nuevaParticula = Object.create(particula)
    nuevaParticula.x = click.offsetX
    nuevaParticula.y = click.offsetY
    let ang = 2 * Math.PI * Math.random()
    nuevaParticula.vX = 400 * Math.cos(ang) * Math.random() 
    nuevaParticula.vY = 400 * Math.sin(ang) * Math.random()
    particulas.push(nuevaParticula)
    console.log(particulas)
}
canvas.onclick = crearParticula

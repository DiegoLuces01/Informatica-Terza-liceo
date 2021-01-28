import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let balon = {
    //PROPIEDADES
    x:0,
    y:0,
    vX: 45,// px por segundo
    vY: 30,
    x2: 100,
    x3: 150,
    y2: 15,
    y3: 30,
    
    dibujarse:function(){
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, 90, 20)

        ctx.beginPath();
      ctx.moveTo(this.x +90, this.y);
        ctx.lineTo(this.x+145, this.y+12);
        ctx.lineTo(this.x+90, this.y+20);
        ctx.stroke();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/500;
        this.x2 = this.x + this.vX * dT/500;
        this.x3 = this.x + this.vX * dT/500;
        this.y = this.y + this.vY * dT/500;
        this.y2 = this.y + this.vY * dT/500;
        this.y3 = this.y + this.vY * dT/500;
    }

}
let balon2 = Object.create(balon)
balon2.x = 1;
balon2.y = 1;
balon2.vX = 20;
balon2.vY = 0;
balon2.x2 = 40;
balon2.x3 = 100;
balon2.y2 = 15;
balon2.y3 = 30;
balon2.vX = -30;
balon2.vY = 40;

//el lapiz dos no sirvió, este debería ir de abajo a la izquerda hacia arriba a la derecha, no aparece
let balon3 = Object.create(balon)
balon2.x = 135;
balon2.y = 200;
balon2.vX = 0;
balon2.vY = 0;


drawObj.draw = function(){
    ctx.clearRect(0, 0, 400, 400);
    balon.dibujarse();
    balon2.dibujarse()
    balon.moverse();
    balon2.moverse();
}
run()
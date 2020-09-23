let lista=document.querySelector("#p1");
console.log(p1);
p1.style.backgroundcolor="rnd";
let btn=document.querySelector("#btc");
function random(number) {
    return Math.floor(Math.random()*(number+1));
}
btn.onclick = function(){
    const rndCol='rgb('+random(255)+','+random(255)+','+random(255)+')';
    p1.style.backgroundColor=rndCol;
}
let btn2=document.querySelector("#bto");
function ocultarP1(){
    p1.style.display="none";
}
btn2.onclick=ocultarP1;
let btn3 = document.querySelector("#btm");
function mostrarP1(){
    p1.style.display="";
}
btn3.onclick=mostrarP1;
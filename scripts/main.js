var rojo = 0;
var azul=0;

window.addEventListener("scroll",setColor)

function setColor(){
    rojo= window.scrollY/(innerHeight/255);
    azul= window.scrollX/(innerWidth/255);
    document.querySelector('body').style.backgroundColor='rgb('+rojo+',0,'+azul+')';
}


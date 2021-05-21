canvas=document.getElementById("Canvas2");
ctx=canvas.getContext("2d");
carwidth=100;
carheight=90;
carx=10;
cary=9;
backgroundimage="racing.gif";
carimage="car1.png";
function load(){
    backgroundimagetag=new Image();
    backgroundimagetag.onload=uploadbackground;
    backgroundimagetag.src=backgroundimage;
    carimagetag=new Image();
    carimagetag.onload=uploadcarimage;
    carimagetag.src=carimage;
}
function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}
function uploadcarimage(){
    ctx.drawImage(carimagetag,carx,cary,carwidth,carheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();

    }if(keyPressed=='37'){
        left();
        
    }if(keyPressed=='39'){
        right();
    }
}
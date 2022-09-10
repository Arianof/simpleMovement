let divElem = document.getElementById('square');
let divLeft = getComputedStyle(divElem);
let res
let fin
let finRes
function rightMove(){
   res = this.getComputedStyle(divElem).left
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin + 1;
 divElem.style.setProperty('left' , finRes + "px");
}
function fastRightMove(){
   res = this.getComputedStyle(divElem).left
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin + 10;
 divElem.style.setProperty('left' , finRes + "px");
}
function leftMove(){
    res = this.getComputedStyle(divElem).left
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin - 1;
 divElem.style.setProperty('left' , finRes + "px");

}
function fastLeftMove(){
    res = this.getComputedStyle(divElem).left
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin - 10;
 divElem.style.setProperty('left' , finRes + "px");

}
function upMove(){
    res = this.getComputedStyle(divElem).top
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin - 1;
 divElem.style.setProperty('top' , finRes + "px");
}
function fastUpMove(){
    res = this.getComputedStyle(divElem).top
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin - 10;
 divElem.style.setProperty('top' , finRes + "px");

}
function downMove(){
   res = this.getComputedStyle(divElem).top
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin + 1;
 divElem.style.setProperty('top' , finRes + "px");

}
function fastDownMove(){
    res = this.getComputedStyle(divElem).top
   if(res === window.innerWidth)
    return;
 fin = 
 res.slice(0 , res.length - 2)
 finRes = +fin + 10;
 divElem.style.setProperty('top' , finRes + "px");
}

var keys = {}
function handleKeyPress(evt) {
  let { keyCode, type } = evt || Event; // to deal with IE
  let isKeyDown = (type == 'keydown');
  keys[keyCode] = isKeyDown;
 
  if(isKeyDown && keys[39]){
   rightMove();
  }
  if(isKeyDown && keys[16] && keys[39]){
  fastRightMove();
  }
  if(isKeyDown && keys[37]){
  leftMove();
  }
  if(isKeyDown && keys[37] && keys[16]){
   fastLeftMove();
  }
  if(isKeyDown && keys[38]){
upMove();
  }
  if(isKeyDown && keys[38] && keys[16]){
   fastUpMove();
  }
  
  if(isKeyDown && keys[40]){
 downMove();
  }
  
  if(isKeyDown && keys[40] && keys[16]){
   fastDownMove();
  }
};

window.addEventListener("keyup", handleKeyPress);
window.addEventListener("keydown", handleKeyPress);

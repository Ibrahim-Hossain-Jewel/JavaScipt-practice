//Declare all variable using const;
const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');
//Declare an keyboard press arrowkey;
var keys = {
    LeftArrow:false,Uparrow:false,Rightarrow:false,Downarrow:false
}
startscreen.addEventListener('click',start);
//keypress addEventListener();
document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);
function start(){
   console.log('clicked');
}
function pressOn(e){
    e.preventDefault();//Removed default value now set new value
    keys[e.key] = true;
    console.log(keys);
}
function pressOff(e){
    e.preventDefault();
    keys[e.key]=true;
    console.log(keys);
}
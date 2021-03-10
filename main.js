//learning the setinterval() and settimeout();
console.log('start setinterval');
var x =0;
var id = setInterval(()=>{ //setinterval() use to looping a object; the setInterval return a id that's by you can control your flow
    document.getElementsByClassName('other')[0].innerHTML=x++;
    if(x==30){
        clearInterval(id);//clearInterval for last destination;
    }

},500);
console.log('end setinterval');
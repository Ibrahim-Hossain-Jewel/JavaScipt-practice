var array = [1,2,3,4,5,6,7];
var counter = 0;
var redu = array.reduce((x,y)=>{
    counter++;
    return x+y;
},0); //here zero is the accumulator initializer
console.log(redu);
console.log(counter);
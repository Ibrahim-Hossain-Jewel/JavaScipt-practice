var array = [1,2,3,4,5,6,7];
var counter = 0;
var redu = array.reduce((x,y)=>{
    counter++;
    return x+y;
});
console.log(redu);
console.log(counter);
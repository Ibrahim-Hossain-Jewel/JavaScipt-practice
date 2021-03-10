var array =[1,2,3,5,7,8,9];
var array2 = array.filter(Element=>{
    if(Element>2) return true;
    return false;
});
console.log(array2);
//try{throw}catch{} block here;
var j=0;
var i=3;
try{
    if(j==0){
        throw "j can not be 0";
    }
    console.log('block is activate');
}catch(err){
    console.log(err);
}
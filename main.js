var btn = document.querySelector('button');
var cost = document.querySelector('input');
var output = document.querySelector('h1');
//these are has global access right now;
//but the the var variable declaration is function scoped;

btn.addEventListener('click',()=>{
    let holder = (cost.value*.121).toFixed(2);
    //here let has bracket scope;
    output.innerHTML = holder;
});
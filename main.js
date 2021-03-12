var btn = document.querySelector('button');
var cost = document.querySelector('input');
var output = document.querySelector('h1');
//these are has global access right now;
//but the the var variable declaration is function scoped;
output.innerText='The maximum fractional part is two';
btn.addEventListener('click',()=>{
    let holder = (cost.value);
    //here let has bracket scope;
    output.innerHTML = holder;
});
//the addEventListener() method is better than on click;

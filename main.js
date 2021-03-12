var btn = document.querySelector('button');
var cost = document.querySelector('input');
var output = document.querySelector('h2');
//these are has global access right now;
//but the the var variable declaration is function scoped;
output.innerText='The maximum fractional part is two';
btn.addEventListener('click',()=>{
    let holder = (cost.value);
    //here let has bracket scope;
    output.innerHTML = `<h1>The provided Bangladeshi money is ${holder} and in USD ${((1/80)*holder).toFixed(2)} $ Thank's for used me!</h1>`;
});
//templating format in javascript;
//the addEventListener() method is better than on click;

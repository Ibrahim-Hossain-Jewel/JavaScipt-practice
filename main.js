console.log("starting setTimeout() function")
setTimeout(()=>{
    let x=2;
    let dom = document.getElementsByClassName("other")[0];
    dom.innerHTML = x;
},1000);
//the setTimeout() method dosen't increment the value
//learning the setinterval() and settimeout();
console.log('start setinterval');
setInterval(()=>{
    document.getElementsByClassName('other')[0].innerHTML="JavaScript is a programming language";
},2000);
console.log('end setinterval');
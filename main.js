//array object overhere;
var human = [
    {name:"jewel"
    ,age : 23,
    weight: 77
},
    {
        name:"tosiba akter",
        age : 13,
        weight: 50
    }
];
//now find the tosiba akter object
const myname = human.find(qualigName =>{
    return qualigName.age==23;
});
console.log(myname);
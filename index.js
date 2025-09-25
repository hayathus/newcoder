// create one variable for each primitive type
let str="Hayat"
let num=21
let bool=true
let nul=null
let undef=undefined

let primitive=[str,num,bool,nul,undef]
for(let value of primitive){
    console.log(value, " ",typeof value)
}

// show the difference between var,let and const by writting one example
if(true){
    var s=9;
}
console.log(s) // it print 9 b/c var is function scoped or it works outside the block
if(true){
    let a=15;
    console.log(b) // it print 15 b/c it's inside the block so let is block scoped
}
console.log(b) // it doesn't work b/c let works only inside the block
// const is same as let it's block scoped the only d/c is const can't be reassigned

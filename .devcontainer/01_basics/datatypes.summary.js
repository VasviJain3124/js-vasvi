// primitive data types  all these are call by value (jo copied hoti hai system mei and whi changes hote hai)
// there are 7 types  string , numbers , boolean, null, undefined, symbol, bigint

// reference data type or non primitive ( memory mei reference directly allocate kiya ja skta hai)
// they are array, objects, functions
// js is dynamically typed lang u don't have to tell while writing a code whether its a number, boolean, or a string its already known
// const id = Symbol("123")
// const anotherId = Symbol("123")
// though we have entered the same values but due to symbol datatype we will get different outputs
//console.log(id===anotherId);


// const heroes = ["shaktiman" ,"doga" ,"naagraj"];//array representation
// let myObj {
//     name = "vasvi",
    //     age = 22,}
// obj 
// const myFunctions = function(){
//     console.log("hello world");
    
// } // function







//=========================================
// types of memory 
// stack (primitive)and heap(non primitive) memory 
//in stack apko jo variable declare kiya hai uska copy milta hai but in heap you will get the original value 
let myYoutubeName = "VasviJaindotcom"
let anotherName = myYoutubeName
anotherName = "chaiorcode"
console.log(anotherName);
console.log(myYoutubeName);

let userOne  = {
    email: "hg.@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "yahoo@FontFaohce.com"
console.log(userOne.email);
console.log(userTwo.email);
// value heap mei original yani same hoti h 






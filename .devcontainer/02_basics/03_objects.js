// object literals (how to create object)

const mySym = Symbol("key1")
const JsUser = {
    name :"vasvi",
    [mySym]: "mykey1",
    "full name": "vasvi jain",
    age : 18,
    location : "delhi",
     Email : "yahoo.js.com",
     isLoggedIn : false,
     lastLoginDays : ["monday", "sunday"]


}
console.log(JsUser.Email); //this is the most used way to access object 
console.log(JsUser["Email"]);// .email krke access kroge ho to jayega as default 
//string hai but jb hamne already ek string declare kiya hai ie "full name" krke to wo bina [] in brackets ke access nhi ho skta 
// and we apply commas as string hai by default and [] these brackets are used to access arrays
console.log(JsUser["full name"]);
//console.log(JsUser.mySym);// though we got mykey1 as output but this is not used as symbol datatype as it is a string datatype
// to use it as a symbol we will use square brackets to represent in object field 
console.log(JsUser[mySym]);
JsUser.Email = "vasvijshindi@gmail.com"  //this is the syntax for changing the values outside the object after assigning it 
//Object.freeze(JsUser)// this freeze tool helps us to freeze the value as in we cannot change the values after freezing 
JsUser.Email = "vasvijs2345@gmail.com"
console.log(JsUser);


// now we are learning syntax for functions ##
JsUser.greeting = function(){
    console.log("hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    //here in the function two we are refering a title in object that we have declared and want to print from function point of view
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








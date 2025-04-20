//const tinderUser = new Object() // this is singleton object 

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shalak"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {  // basically here we are showing that we can include objects in objects 
    email: "googlegoogle@gmail.com",
    fullname : {
        userFullName : {
            firstname : "vasvi",
            lastname : "jain",
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname );

const obj1 = {1: "a", 2: "b"

}
const obj2 = {3:"c", 4:"d"}
 //const obj3 = Object.assign({}, obj1,obj2) //curly braces are optional but is a good practise to use 
//console.log(obj3);
// rather we'll use another way to combine 
const obj3 = {...obj1, ...obj2}
console.log(obj3);
// user[1].email
// console.log(tinderuser);

console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// this is used to check whether that property exists or not 

const course = {
    courseName : "js hindi",
    price : "9900",
    courseInstructor : "vasvi"
}
const {courseInstructor} = course
console.log(courseInstructor);
//we will study about syntax of JSON
 {
    "name" : "vasvi",
    "sitereached" : "google",


// if we don't write const obj krke define nhi kiya or simple curly braces lga diye hai then its JSON
 }
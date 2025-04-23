//function sayMyName (){
    
    // console.log("v");
    // console.log("a");
    // console.log("s");
    // console.log("v");
    // console.log("i");
    
//}
//sayMyName()// ye jo paranthesis hai this helps in execution of the function 
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    

// }
// function addTwoNumbers(number1, number2){
//     let result = number1+number2;
//     return result
//     // agar mai return  ke bad koi kuch cheez add krungi to  fir wo execute nhi hogi 
    

// }
// const result = addTwoNumbers(3,4)
//console.log("return:", result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return

    }
    return`${username} just logged in`
}

console.log(loginUserMessage());

function calculateCartPrice (value1,value2,...num1){
    return num1
}
console.log(calculateCartPrice(2,200,300,400,500,600));// now one problem that we are facing here is that after entering more values 
//other than 2 but we are getting first value that we passes over here so in function we will use the spread operator to tackle this issue 
// spread operator will actually induct that you have to take all the values assigned(...), this is the spread operator 
// after this we will add some value 1 and value 2 before num1 that we have already spread so value1 and value 2 will be taken and rest value will be printed in num1 spread operator

const user = {
    username:"vasvi",
    price:200
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username},price is ${anyObject.price}`);
    
}
handleObject(user)

const myNewArray = [200,300,400,500,600]

function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

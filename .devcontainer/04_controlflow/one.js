// if(2==2){
//     console.log("executed");
    
// }

const balance = 1000
//if(balance>500) console.log("executed"); // this is called implicit scope and this will be printed without the curly braces and we can a
//more scopes like this just remove the semicolon and add comma and add more scopes and close them with the semicolon but never practise this is very unused way

if(balance<500){
    console.log("less than 500");
    
}else if (balance<750){
    console.log("less than 750");
}else if (balance<900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true 
const loginFromGoogle = false 
const loginFromEmail = true 
if(userLoggedIn&&debitCard){
    console.log("allow to buy course");// && this is and statement ie ki dono true honi chahiye 
    
}
if (loginFromGoogle || loginFromEmail){
    console.log("allow acess");// this is || or statement ki koi bhi ek true ho
    
}
    

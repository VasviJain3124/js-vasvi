// immediately invoked function expression 
(function chai(){
    console.log(`db connectd`);
    
})();
//chai()// this is the raw way to call a function but we will learn new way ie is IIFE in which syntax is ()()
// this double brackets  and we do this because global scope ke variables ki wajah se pollution hota hai so uss pollution ko hatane 
//ke liye we use that 

((name) => {
    console.log(`db connectd to  ${name}`);
    
})("vasvi") // to run this code we have to end the previous code by ";" and this is an arrow function 
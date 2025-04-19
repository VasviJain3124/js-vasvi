let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// now if we will check for the typeof the score it will again pass a number but 33abc is not a number as we know we can check from simply printing without typeof so we will get NAN which means not a number 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
   


let value = 3
let negValue = -value
console.log(negValue);
let str1 = "hiiii"
let str2 = " vasvi"
let str3 = (str1 + str2)
console.log(str3);


// console.log("1" + 2);
// console.log("2"+1);
// console.log("1"+2+2);
// console.log(2+2+"1");// it basically means prriority order ke hisab se cheeze hongi and or jo pehle hai whi hoga agr 
//string hai to string wala consider krenge fir baki kuch nhi hoga nhi to number hai pehle to uske accordinglr operations honge 

//console.log((2*4)+5-6/7)
console.log(true);


console.log(+true);// basically used for conversion 
console.log(+"");
console.log(+false);


let num1 , num2, num3 
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);  //If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
// "x:4, y:3"
 //"a:4, b:4"
 let x = 3;
 const y = x++;
 
 console.log(`x:${x}, y:${y}`);
 // Expected output: "x:4, y:3"
 
 let a = 3;
 const b = ++a;
 
 console.log(`a:${a}, b:${b}`);
 // Expected output: "a:4, b:4"





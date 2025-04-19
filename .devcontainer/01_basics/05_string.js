const name = "vasvi"
const repoCount = 30
//console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);
const gameName = new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0 ,4)
console.log(newString);// we can use slice instead of substring as it can take negative values as well 
const newStringOne = "     vasvi    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://hitesh.com%20/hiteshkl"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));








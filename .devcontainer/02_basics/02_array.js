// const marvel_heros = ["ironman","thor","spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// a better way is 
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5],6,7,[8,9,10]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);

console.log(Array.isArray("vasvi")); // is not an array so output as false 
console.log(Array.from("vasvi"));// now a string is converted to an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







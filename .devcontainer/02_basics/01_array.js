const myArr = [0,1,2,3,4,5]
console.log(myArr[3]);
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[2]);
// Array methods
// myArr.push(6)  //this basically add the value in the array here it is 6
// console.log(myArr);
// myArr.pop()// this basically removes the last value from an array
//myArr.unshift(9)
//console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice 
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);
// slice mei apka jese 1 indexing ke pehle wala element or 3 indexing ke bad wala element remove ho gya but what happens when you print 
//output as myn1 or myArr so you will get the original array first and then the sliced one 
// in case on splice same happens like 1 ki indexing se pehle wale elements gye and 3 ke bad ki indexing ke but 3 indexing rhegi aisa alice mei nhi hota tha 
// slice mei myArr was original array but in case of splice we get the left of array elements after splicing 




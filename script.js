//1
let randomArray1 = [];
for (let i = 0; i < 10; i++) {
    randomArray1.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArray1);

//2
randomArray1.push(72);
console.log("After push:", randomArray1 );

//3
randomArray1.pop();
console.log("After pop:", randomArray1);

//4
randomArray1.unshift(53);
console.log("After unshift:" ,randomArray1);

//5
randomArray1.shift();
console.log("After shift:" ,randomArray1);

//6
randomArray1.sort((a, b) => a - b);
console.log("Sorted array in ascending order:", randomArray1);

//7
randomArray1.sort((a, b) => b - a);
console.log("Sorted array in descending order:", randomArray1);

//8
console.log("Array elements:");
randomArray1.forEach(element => console.log(element));

//9
let squaredArray = randomArray1.map(element => element * element);
console.log("Squared array:", squaredArray)

//10
let evenArray = randomArray1.filter(element => element % 2 === 0);
console.log("Even numbers array:", evenArray);

//11
let sum = randomArray1.reduce((total, currentValue) => total + currentValue, 0);
console.log("Sum of all elements:", sum);
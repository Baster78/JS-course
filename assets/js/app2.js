'use strict';

const arr = [10, 8, 3, 12, 25];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
   return a - b;
}

// arr.pop();

// console.log(arr);

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (const value of arr) {
//    console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//    console.log(`${i}: ${item} Внутри массива ${arr}`);
// });

// const str = prompt('', '');

// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));

'use strict';

//////Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//   return str.split('').reverse().join('');
// }

// console.log(solution('world'));

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // setup loop to go through array of given length
//     if (arr[i] > 0) {
//       // if arr[i] is greater than zero
//       total += arr[i]; // add arr[i] to total
//     }
//   }
//   return total; // return total
// }

// console.log(positiveSum([-1, -4, 7, 12]));

// console.log(positiveSum([-1, -4, 7, 12]));

// //Total pressure calculation

// let solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) =>
//   ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
//     0.082 *
//     (temp + 273.15)) /
//   volume;
// console.log(solution(44, 30, 3, 2, 5, 50));
// console.log(solution(60, 20, 10, 30, 10, 100));

// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0
//     ? 'Pls go away and stop eating my sheep'
//     : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
// }

// ///////////////////
// Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?////////////////

// function makeNegative(num) {
//   if (num > 0) {
//     return (num = -num);
//   } else {
//     return num;
//   }
// }
// console.log(makeNegative(0));

///////alternative//////////
// function makeNegative(num) {
//   return -Math.abs(num);
// }

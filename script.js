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

////////change all "T" to "U"///////////////
// function DNAtoRNA(dna) {
//   const x = dna;
//   const re = /T/g;
//   return x.replace(re, 'U');
// }
// console.log(DNAtoRNA('UTTT'));

// ///////DRY////////
// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, 'U');
// }

// function multiply(number) {
//   const x = Math.abs(number).toString().length;
//   return number * 5 ** x;
// }
// multiply(45);

//////evenOrOdd///////////
// function even_Or_Odd(number) {
//   if (number % 2 === 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }
// console.log(even_Or_Odd(23));

// //////////trueYesFalseNo///////////////
// function boolToWord(bool) {
//   if (bool) {
//     return 'Yes';
//   } else {
//     return 'No';
//   }
// }

// //////DRY////////

// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }

////////fizzbuzz////////
function fizzbuzz(n) {
  let exp = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      exp.push('FizzBuzz');
    } else if (i % 5 === 0) {
      exp.push('Buzz');
    } else if (i % 3 === 0) {
      exp.push('Fizz');
    } else {
      exp.push(i);
    }
  }
  return exp;
}

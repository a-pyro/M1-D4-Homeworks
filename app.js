/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = (l1, l2) => l1 * l2;

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = (n1, n2) => (n1 === n2 ? (n1 + n2) * 3 : n1 + n2);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = (num) =>
  num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = (num) => (num >= 20 && num <= 100) || num === 400;
// console.log(boundary(300));
// console.log(boundary(53));
// console.log(boundary(19));
// console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = (string) =>
  string.toLowerCase().startsWith('strive') ? string : `Strive ${string}`;

// console.log(strivify('Strive is cool 😎'));
// console.log(strivify('ardi is cool 😎'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (n) => n % 3 === 0 || n % 7 === 0;
// for (let i = 0; i <= 22; i++) {
// console.log(i, check3and7(i));
// }

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = (string) => string.split('').reverse().join('');

console.log(reverseString('ciao'));
console.log(reverseString('oaic'));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = (string) =>
  string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

// console.log(upperFirst('ciao ciao ciao'));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (string) => string.slice(1, string.length - 1);
// console.log(cutString('ciao'));
// console.log(cutString('cio'));
// console.log(cutString('co'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = (n) =>
  Array(n)
    .fill(0)
    .map((_) => Math.floor(Math.random() * 11));
// console.log(giveMeRandom(5));
// console.log(giveMeRandom(10));
// console.log(giveMeRandom(1));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/

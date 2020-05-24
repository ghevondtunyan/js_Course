// #1 ******* Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise *******

function isPrimeNum(num) {
    if (num % 2 === 0) {
        console.log("no");
    } else if (num % 2 !== 0 && num > 1) {
        console.log("yes");
    }
}
isPrimeNum()

/* #2 ******* Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2) *******
*/

function fiboNum(num) {
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[num]
}
fiboNum()

/* #3 *******Given a number n( n> 0 ). Print Fibonacci series up to n ******* */


function seriesFiboNum(num) {
    let arr = [0, 1];
    let fNum = num;
    let output = "";
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
        if (arr[i] < fNum) {
            output += i + " ";
        }
    }
    console.log(output)
}
seriesFiboNum()

/* #4 ******* Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder */
//The sum is not working correctly with prompt!!! 
let num = prompt();
let arr = num.toString().split('');

let sum = 0;
let prod = 1;
let result = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    prod *= arr[i];
}

if (prod % sum === 0) {
    result = prod / sum;
    console.log(`Quotient is ${result}`);
} else if (prod % sum !== 0) {
    result = prod % sum;
    console.log(`Remainder is ${result}`);
} else {
    console.log("Cannot calculate")
}



// #5 ******* Given an array of numbers. Find the index of the second maximum element *******


let arr = [12, 34, 5, 25, 6];
let max1 = Math.max(...arr);
arr.indexOf(max1);
arr.splice(1, 1, 1);
let maxSec = Math.max(...arr);
arr.indexOf(maxSec)


/* #6 Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array. */

let arr1 = [1, 2, 3, 4];
let padAmount = 1;
let repeat = 3;
let x = arr1[0];
let y = arr1[arr1.length - 1];

for (let i = 0; i < repeat; i++) {
    if (padAmount <= arr1.length) {
        arr1.unshift(x);
        arr1.push(y);
    } else {
        console.log("Invalid padding amount")
    }
}
console.log(arr1)



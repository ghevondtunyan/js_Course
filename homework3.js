/* #1  Write a recursive function to determine whether all digits of the number are odd or not. */

function oddDigits(num) {
    if (num < 10) {
        return num % 2 != 0;
    }
    if (num % 2 === 0) {
        return false;
    }
    return oddDigits(Math.floor(num / 10))
}
oddDigits();

/*  #2 Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1) */

function findMinNum(arr) {

    let begin = arr.slice(0, arr.length - 1);
    let end = arr.slice(1)
    
    if (arr.length === 1) {
        return arr[0];
    } else if (arr[0] <= arr[arr.length - 1]) {
        return findMinNum(begin)
    } else {
        return findMinNum(end)
    }
}
findMinNum([]);

/*  #3  Write a recursive function which receives a number as arguments and returns the
fibonacci sequence as array */

function fiboNumArr(num) {
    if (num === 0) return [0];
    if (num === 1) return [1, 1];

    let arr = fiboNumArr(num - 1);
    arr.push(arr[num - 2] + arr[num - 3]);
    return arr;
}
fiboNumArr();

/* #4 Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays). */

function nestArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? newArr = newArr.concat(nestArr(arr[i])) : newArr.push(arr[i])
    }
    return newArr;
}
nestArr();


/* #5. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
 Repeat that process if needed and return the result. */
function sumOfDigits(number) {
    let reminder = number % 10;
    if (number >= 10) {
        let result = Math.floor(number / 10);
        reminder += sumOfDigits(result);
    }
    return reminder;
}
sumOfDigits();
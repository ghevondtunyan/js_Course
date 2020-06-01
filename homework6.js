/* #1  Given an array. Determine whether it consists only from unique elements or not. */

function checkIfArrIsUnique(arr){
	return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

if (checkIfArrIsUnique(arr)) {
	console.log("Array is not unique");
}
else {
	console.log("Array is unique");
}


/* #2 Given an array of numbers. Find the sum of numbers’ quadratic which are even. */

function sumOfEvenNums(arr) {
    let sum = 0;
    arr.map(el => {
        let resultEl = Math.sqrt(el)
        if (resultEl % 2 === 0) {
            sum += resultEl;
        }
    })
    return sum;
}

sumOfEvenNums([])

/* #3 Check whether string is palindrome, or not. */

function checkForPalindrome (str) {
    let reversedStr = str.split().reverse().join("");
    if(reversedStr === str){
        console.log(`${str} is palindrome!`)
    }else {
        console.log(`${str} is not a palindrome!`)
    }
}

checkForPalindrome(str);

/* #4 Given a word and a list of possible anagrams, select the correct sublist. */

function findAnagrams (str, array){
    let sortedStr = str.split('').sort().join();
    let sortedArr = array.map(el => el.split('').sort().join());
    return sortedArr.filter(el => el === sortedStr);
}

findAnagrams(str, [])
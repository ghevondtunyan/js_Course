// #1 Given a number. Print “odd” if the number is odd and “even” if it’s even.

let num;

num % 2 === 0 ? console.log("The number is even") : console.log("The number is odd");

// #2 Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let x, y;

if (x % y === 0 || y % x === 0) {
    console.log("1")
} else {
    console.log("0")
}

// #3 Given two variables, which are the angles of a triangle. Find the third angle of the
//triangle.

let a, b, c;

c = 180 - a - b;

// #4 Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

let n, n1, n2;

n1 = n + n;
n2 = n + n + n;
result = String(n) + String(n1) + String(n2);

console.log(result)

// #5 Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.

let inpNum, num2, num3;

if (inpNum < 10 || inpNum % 10 === 0) {
    console.log(inpNum)
} else {
    num2 = inpNum % 10;
    num3 = Math.floor(inpNum / 10);
    console.log(String(num2) + String(num3))
}

// #6 Given five numbers as input. Calculate and print the average of the numbers(without
//using arrays).
let a1, a2, a3, a4, a5, mathAvg;
mathAvg = (a1 + a2 + a3 + a4 + a5) / 5;
console.log(mathAvg);

// #7 Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let number;

if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0 ) {
    console.log(` ${number} is multiple  of 3, 5 or 7`)
} else if (number % 3 === 0 && number % 5 === 0){
    console.log(` ${number} is multiple of 3 and 5`)
} else if (number % 5 === 0 && number % 7 === 0){
    console.log(` ${number} is multiple of 5 and 7`)
} else if (number % 3 === 0 && number % 7 === 0){
    console.log(` ${number} is multiple of 3 and 7`)
} else {
    console.log(` ${number} is not multiple of 3, 5 or 7`)
}

// #8 Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months is between 1 and 12.

//This is not correct

let age;

if(age >= 1 && age <= 12){
    console.log("baby")
}else if(age >= 1 && age <= 2){
    console.log("toddler")
}else if(age >= 3 && age <= 12){
    console.log("child")
}else if(age >= 13 && age <= 17){
    console.log("teenager")
}else if(age >= 18){
    console.log("adult")
}


// #9 *Given three numbers. Sort them by the ascending order.

let x1, x2, x3;

if(x1 < x2 && x1 < x3){
    if(x2 < x3){
        console.log(x1, x2, x3)
    }else{
        console.log(x1, x3, x2)
    }
}else if(x2 < x1 && x2 < x3){
    if(x1 < x3){
        console.log(x2, x1, x3)
    }else{
        console.log(x2, x3, x1)
    }
}else if(x3 < x1 && x3 < x2){
    if(x1 < x3){
        console.log(x3, x2, x1)
    }else{
        console.log(x3, x1, x2)
    }
}else{
    console.log(x1, x2, x3)
}


// #10 Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
// The criteria for passing are as follows:
// a. A student passes if all three examinations are passed.
// b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40.


let exam1, exam2, exam3, resultExam;
resultExam = exam1 + exam2 + exam3;

if(resultExam > 120){
    console.log("PASS")
}else if(resultExam / 3 >= 50){
    console.log("PASS")
}else{
    console.log("FAIL")
}


// #11 Given the following code rewrite it using only two if operators. (Hint: use logical
//operators).

var m = +prompt();

var i = 0;
var j = 0;

if(m % 2 === 0 && !Math.floor(m / 10)){
    i += 1;
}else if(m % 3 === 0 && m % 10 === 1){
    j += 1;
}

// #12 Insert a digit and a number. Check whether the digits contains in the number or not.
let xNum = 2465;
let digit = 6;
let yNum = String(xNum)
for (let i = 0; i < yNum.length; i++){
    if(yNum[i] == digit){
        console.log("Yes")
    }else {
        console.log("No")
    }
}

// #13 Enter a number. Reverse its first and last digits. Print the new number.

function swap(myNumber) {
    [myNumber[0], myNumber[myNumber.length - 1]] = [myNumber[myNumber.length - 1], myNumber[0]];
    return myNumber;
}
console.log(swap()); 

// #14 Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.

let nameOfFigure = prompt('Type rectangle or triangle')
if(nameOfFigure ==='rectangle'){
    let width, height;
    let areaRec = width * height;
    console.log(areaRec);
}else if(nameOfFigure ==='triangle'){
    let side1, side2, side3 
    let s = (side1 + side2 + side3)/2;
    let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(area);
}


// while
let i = 0;
while ( i <= 60 ) {
    console.log( i ,"I will invest at least 6 hrs every single day for next 60 days!")
    i++
}

// while odd Number 

let oddNum =[]
let j = 61
while (  j <= 100) {
    if (j % 2 === 0) {
        oddNum.push(j)
    }
    j++
}

console.log(oddNum);

// Find all the even numbers from 78 to 98.

let evenNum = 78

while (evenNum < 98) {
    if(evenNum % 2 === 1) {
        console.log(evenNum);
    }
    evenNum++
    
}

// Display sum of all the odd numbers from 81 to 131.
let num = 81
let sum = 0

while (num < 131) {
    if (num % 2 === 0) {
        sum += num
    }
    num++
}
console.log(sum);


// Display sum of all the even numbers from 206 to 311.

let num1 = 206
let sum1 = 0

while (num1 < 311) {
    if (num1 % 2 === 1) {
        sum1 += num1
    }
    num1++
}
console.log(sum1);

// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

let Number = 1
while (Number <=10) {
    console.log(`5 x ${Number} = ${5 * Number}`)
    Number++
}

// Implement a countdown timer that counts down from 21 to 15.

let Num = 21

while (Num >= 15) {
    console.log(Num);
    Num-- 
}
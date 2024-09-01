
// for 

for (let i = 0; i <= 60; i++) {
    console.log( i ,"I will invest at least 6 hrs every single day for next 60 days!")
    
}


// find odd Number 
 let oddNum =[]
for (let i = 61; i < 100; i++) {
   
    if (i % 2 === 0) {
        oddNum.push(i)
    }
   
} 
console.log(oddNum)

// Find even Number

for (let i = 78; i < 98; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
    
}

// sum of all the odd numbers from 91 to 129.
let sum = 0
for (let i = 91; i < 129; i++) {
    if (i % 2 === 0) {
        sum = sum + i  
    }
    
}
console.log(sum)

// sum of all the even numbers from 51 to 85.

let sumOfEvenNum= 0;

for (let i = 51; i < 85; i++) {
    if (i % 2 === 1) {
        sumOfEvenNum = sumOfEvenNum + i
    }
    
}
console.log(sumOfEvenNum);

// Generate a multiplication table for number 9

for (let i = 1; i <= 10; i++) {
   console.log( ` 9 * ${i}  =  ${9 * i}`)
    
}

// Implement a countdown timer that counts down from 81 to 65.
for (let i = 81; i >= 65; i--) {
   
    console.log(i)
}
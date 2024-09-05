// Take four parameters. Multiply the four numbers and then return the result

function sum(num1 , num2, num3 , num4) {
    let total = num1*num2*num3 *num4 
    return total
}
let total = sum(2,5,6,10)
// console.log(total);

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function check(params) {

    if (params % 2 === 1) {
       return params * 2
    }else{
       return params /2
    }
    
}

 let number = check(2)
//  console.log(number);

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 
function make_avg(arr){
    let sum = 0
        for (const element of arr) {
             sum+=element
        }

        return Math.floor(sum / arr.length) 
}

let average = make_avg([2,6,8,2,8,52,5,7,57,36,55,])

// console.log(average);

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function  count_zero(params){
    let count = 0

    for (let i = 0; i < params.length; i++) {
        if (params[i] == '0') {
            
            count++
        }
        
    }
   return count
    

}


let binarystring = count_zero('101000111010101')

// console.log(binarystring);

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function  odd_even(num){

    if (num % 2 === 0) {
        return 'even'
    }

    return "odd"
}

let checkNum = odd_even(7)
console.log(checkNum);

// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
//  console.log(celsiusToFahrenheit(30));
  

// task2
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample- numbers = [5,6,11,12,98, 5]

function dubble(array , num ) {
  let check = 0
  for (const element of array) {
        if (num === element) {
           
           check++
        }
       
       
  }
  return check
}

numbers = [5,6,11,12,98, 5]
 let see = dubble(numbers , 25)
//  console.log(see);

// Task-3:
// Write a function to count the number of vowels in a string.
 
function vowelsCheck(string) {
  let vowels = ["a",'e','i','o','u']
  let count = 0

  for (const i of string) {
    if( vowels.includes(i.toLowerCase()) ){
      count++
    }
  }

  return count
  
}

//  console.log(vowelsCheck('juwelrana'));
  
// task4
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

function name(string) {
  let words = string.split(' ')
  let bigWord =' '

   for (let word of words) {
         if (word.length > bigWord.length) {
           bigWord = word
         }
   }

  return  bigWord
  
}

let bigWord = name('I am learning Programming to become a programmer')
// console.log(bigWord);

// Generate a random number between 10 to 20.
function randomNum() {
  console.log( Math.floor(Math.random() * 11 ) + 10);
    
}
randomNum()
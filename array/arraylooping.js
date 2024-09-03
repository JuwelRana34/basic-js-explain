// Write a JavaScript code to reverse the array colors without using the reverse method.
 const colors = ['red', 'blue', 'green', 'yellow', 'orange']

 let rev_color =[]
 for (let color of colors) {
    rev_color.unshift(color)
    
 }

//  console.log(rev_color);
 
// Write a JavaScript code to get the even numbers from an array using any looping technique.

 const numbers = [12, 98, 5, 41, 23, 78, 46];
 let evenNum= []
 for (let number of numbers) {
    if (number % 2 === 0) {
        evenNum.push(number)
    }
    
 }

//  console.log(evenNum);

// Use a for...of loop to concatenate all the elements of an array into a single string.

var number = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';

for (var name of number) {
  result += name;
}

// console.log(result);


// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statements = 'I am a hard working person'

const rev_word = statements.split(" ").reverse().join(" ")
console.log(rev_word);





 
// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for (let i = 1; i <40; i++) {
    if (i % 2 === 0) {
       continue 
    }
    console.log(i);
    
}

// display odd number from 55 to 85 and skip the numbers divisible by 5.

for (let i = 55; i <85; i++) {
    if (i % 5 === 0) {
       continue 
    }
    console.log("---",i);
    
}


for (let i = 0; i < 5; i+=3) {
    console.log(i);
   }

   let i = 0;
while (i < 5) {
 console.log(i);
 i++;
}

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
 continue;
 }
 console.log("...", array[i]);
}
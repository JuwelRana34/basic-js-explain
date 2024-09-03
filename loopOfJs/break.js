for (let i = 0; i < 200; i++) {
    if (i === 100) {
       break
    }
    // console.log(i);
    
}


// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let sum = 0 
for (let i = 0; ; i++) {
   sum += i
   if (sum = 100) {
    break
   }
    
}



let number = 1 
let sum2 = 0
while (true) {
    sum2 += number
    if (sum2 >= 100) {
        break
    }
    number++
    console.log( 'total' ,number);
}

console.log(sum2)

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 0; i < 100; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        console.log(`First square number is ${i}`);
        break
    }
    
}

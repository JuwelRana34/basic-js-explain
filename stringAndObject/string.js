//  Count how many times a string has the letter a or A
 const letter = " A Count how many times a A string has the letter a"

//  console.log(letter.match(/[a]/gi));
 
//  Check whether a string contains all the vowels a, e, i, o, u



  let vowels = 'Check whether a string contains all the vowels e'
        vowels  = vowels.replace(/\b\w/g, char => char.toUpperCase());
       console.log(vowels); 
console.log(vowels.match(/[aeiou]/gi));

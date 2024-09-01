// 1. Declare an array

const arr = ['Apple','Banana',
    'Orange',
    'Mango',
    'Grapes']

    const indexofarr = arr.indexOf('Orange')
    console.log(indexofarr);
    arr[2] = 'jambura'

    console.log(arr);
    

    // Add or remove elements

   const touristspot = ['dhaka', 'sylhet', 'cumilla']
   touristspot.push('rangpur')
   touristspot.push('india', 'uk')
   touristspot.pop();
   console.log(touristspot);
   
    

// Checking Array Membership

    const books = ['html', 'javascript', 'python','nodejs', 'mongodb']

  const findone =  books.includes("javascript")

    console.log(findone);
    
    // Checking if it's an Array

    const arr1 = {}
    const arr2 = []
    const arr3 = 'lskgjdsjhgj'
    const arr4 = 14546
    const check = Array.isArray( arr4)
    console.log(check)

    // Combining Arrays

  var arr11 = [3, 7, 1, 9, 4]
  var arr22 = [8, 2, 6, 5, 0]
  const mrach = arr11.concat(arr22)
console.log(arr11);
console.log(arr22);
console.log(mrach);

let checkMe = mrach.length

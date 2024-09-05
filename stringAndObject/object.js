// Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"]= 5

// console.log(car);


// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(student.physics.marks);



// Count the number of properties.



let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let arr = []
 for (let student in students) {
    arr.push(student)
    
 }

//  orr
 let see = Object.keys(students).length
//  console.log(arr.length, see );


//  Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for (let object in myObject) {
    // console.log(`key : ${object} | type: ${typeof(myObject[object])}- ${myObject[object]}`);
    
    
}

// Create an array of objects where each object represents a product with properties like name, price, and category. Print all products in a specific category.

const newarr2 = [
    {
        name : 'mango',
        price : '500',
        category : 'fruts'
    },
    {
        name : 'apple',
        price : '100',
        category : 'fruts'
    },
    {
        name : 'banana',
        price : '50',
        category : 'fruts'
    },
    {
        name : 'pizza',
        price : '480',
        category : 'fastfood'
    },
    {
        name : 'fuska',
        price : '40',
        category : 'fastfood'
    },
    {
        name : 'role',
        price : '30',
        category : 'fastfood'
    },
]

for (let fruts of  newarr2) {
    if (fruts.category !== "fruts") {
        // console.log(`fruts name : ${fruts.name} & price: ${fruts.price}`);
    }
    
    
}

// Find the most expensive product by comparing the prices of all products.

let expensiveProduct = newarr2[0]

for (const product of newarr2) {
    if (product.price> expensiveProduct.price) {
        expensiveProduct = newarr[product]
    }
}

// console.log(expensiveProduct);

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];

let commonArr = []
for (const arr1 of array1) {
    for (const arr2 of array2) {
        
        if (arr1 == arr2) {
            commonArr.push(arr2)
        }
    }
}

console.log(commonArr);

( function juwel(){
var localVar = 'This is a local variable';
console.log(localVar);  // Output: This is a local variable
})();

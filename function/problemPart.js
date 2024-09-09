// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function heightNum(params) {
  let bigNum = 0;
  for (const i of params) {
    if (i > bigNum) {
      bigNum = i;
    }
  }
  return bigNum;
}
let result = heightNum(heights2);
// console.log(result);

// Task -2:
// Find the friend with the smallest name.
const heights3 = ["rahim", "robin", "rafi", "ron", "rashed"];

// function smallestName(array) {
//     let words = array.slice(',')
//     let name = words[0]
//     for (const word of words) {
//         if (word.length < name.length ) {
//            name = word
//         }
//     }
//     return name
// }

//  console.log(smallestName(heights3));
function smallestName(array) {
  let name = array[0];
  for (const word of array) {
    if (word.length < name.length) {
      name = word;
    }
  }
  return name;
}

//  console.log(smallestName(heights3));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablets, mobile) {
  return laptop + tablets + mobile;
}

let total = calculateElectronicsBudget(35000, 15000, 20000);
//  console.log(total);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let price = 0;

  for (const phone of phones) {
    price = price + phone.price;
  }

  let averagePrice = price / phones.length;
  return averagePrice;
}

const result2 = findAveragePhonePrice(phones);
// console.log(result2);

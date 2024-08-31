function calculateBMI(weight, height) {
    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Round to one decimal place
    return bmi.toFixed(1);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

// Example usage:
let weight = 70; // in kg
let height = 170; // in cm
let bmi = calculateBMI(weight, height);
let category = getBMICategory(bmi);
console.log(`Your BMI is ${bmi}, which means you are ${category}`);

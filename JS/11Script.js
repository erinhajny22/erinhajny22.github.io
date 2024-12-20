// Function to display fortune
function tellFortune(children, partner, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.";
}

// Display three fortunes by calling tellFortune
document.getElementById('fortune1').innerText = tellFortune(2, "Alex", "London", "Teacher");
document.getElementById('fortune2').innerText = tellFortune(3, "Jordan", "Paris", "Artist");
document.getElementById('fortune3').innerText = tellFortune(1, "Taylor", "Tokyo", "Chef");

// Function to calculate dog age
function calculateDogAge(puppyAge) {
    let dogAge = puppyAge * 7;
    return "Your pet is " + dogAge + " years old in dog years!";
}

// Display dog ages by calling calculateDogAge
document.getElementById('dogAge1').innerText = calculateDogAge(2);
document.getElementById('dogAge2').innerText = calculateDogAge(5);
document.getElementById('dogAge3').innerText = calculateDogAge(7);

// Calculate dog age from user input
function calculateUserDogAge() {
    let userDogAge = document.getElementById('dogInput').value;
    let result = calculateDogAge(userDogAge);
    document.getElementById('userDogAge').innerText = result;
}

// Function to reverse a number
function reverseNumber(number) {
    let numberString = number.toString();
    let reversedString = "";
    for (let i = numberString.length - 1; i >= 0; i--) {
        reversedString += numberString[i];
    }
    return reversedString;
}

// Display reversed numbers
document.getElementById('reverse1').innerText = "Reversed: " + reverseNumber(32243);
document.getElementById('reverse2').innerText = "Reversed: " + reverseNumber(12345);

// Function to put string letters in alphabetical order
function alphabetOrder(str) {
    let lettersArray = str.split("");
    lettersArray.sort();
    return lettersArray.join("");
}

// Display alphabetically ordered strings
document.getElementById('alpha1').innerText = "Alphabetical Order: " + alphabetOrder("webmaster");
document.getElementById('alpha2').innerText = "Alphabetical Order: " + alphabetOrder("javascript");

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
    let wordsArray = str.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i];
        wordsArray[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return wordsArray.join(" ");
}

// Display capitalized sentences
document.getElementById('capitalize1').innerText = "Capitalized: " + capitalizeWords("the quick brown fox");
document.getElementById('capitalize2').innerText = "Capitalized: " + capitalizeWords("hello world from js");

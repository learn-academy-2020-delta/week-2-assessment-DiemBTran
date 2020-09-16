// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

// create a function that takes a single number as an argument
const divideByThree = (number) => {
    // use %3 to see if a number can be divided by 3 with no remainder === 0
    // check to see if user input a number
    if (typeof number === "number") {
        if (number % 3 === 0) {
            // if num %3 === 0, it's divisible by three
            return `${number} is dibisible by three`
        }
        else if (number % 3 !== 0) {
            // if num %3 !== 0, its not divisble by three
            return `${number} is not divisible by three`
        }
        else {
            return "There has been some input error"
        }
    }
    // if typeof number is not number, return error message
    else {
        return "There has been an input error. Did you enter a number?"
    }
}


var num1 = 15
// Expected output: "15 is divisible by three"
console.log(divideByThree(num1));

var num2 = 0
// Expected output: "0 is divisible by three"
console.log(divideByThree(num2));

var num3 = -7
// Expected output: "-7 is not divisble by three"
console.log(divideByThree(num3));

var string = "words"
// my own test to see if the error message for type occurs
console.log(divideByThree(string));

var anotherValue = true
// my own test to see if the error message for type occurs
console.log(divideByThree(anotherValue));


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

//create a function that takes in an array of nouns
const capitalizer = (array) => {
    let capitalizedWords = (array.map(currentWord => {
        // need to hold each word alone as current word as its own array
        let arrayOfLetters = currentWord.split("")
        // make a var to hold capitlized index 0 of array of letters
        let capitalizedFirstLetter = arrayOfLetters[0].toUpperCase()
        // keep a var of the slice after capitalizedFirstLetter and join to make a string again
        let restOfWord = arrayOfLetters.slice(1).join("")
        // create a variable that holds complete word
        let completedWord = capitalizedFirstLetter + restOfWord
        return completedWord
    }))
    //return the new array with all the completed words
    return capitalizedWords
}

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
console.log(capitalizer(randomNouns));



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
// create a function that takes in an array
const numbersLeastToGreatest = (array) => {
    //filter for typeof number, and push that into a new array
    let numbersOnly = (array.filter(value => typeof value === "number"))
    // use .sort() method to sort all numbers least to greatest
    let sortedNumbers = numbersOnly.sort((a, b) => a - b)
    // return sortedNumbers array
    return sortedNumbers
}


var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
console.log(numbersLeastToGreatest(mixedDataArray));




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// create a function that takes in a string
const firstVowelFinder = (string) => {
    // lowercase string
    // split string into array 
    let arrOfLetters = string.toLowerCase().split("")
    // create a variable that will hold all instances of vowels
    // filter through string
    // if the value of the char within filter is a, e, i, o, u, then push that valueto vowels
    let vowels = arrOfLetters.filter(letter => letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    // somehow equate vowoels[0] to the letter in the given string
    let firstVowelChar = vowels[0]
    // return only the index of the first vowel within the word
    let indexOfFirstVowel = arrOfLetters.indexOf(firstVowelChar)
    return indexOfFirstVowel
}
var vowelTester1 = "lEArn"
// Expected output: 1
console.log(firstVowelFinder(vowelTester1));

var vowelTester2 = "thrOw"
// Expected output: 3
console.log(firstVowelFinder(vowelTester2));






// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//create a function that can take 3 arguments (num1, num2, math operator)
// if num 2 === 0 and math op === /, return "cant divid by 0"
// returns the given calculation
// create a function that can take 3 arguments (num1, num2, math operator)
const calculator = (num1, mathOperator, num2) => {
    // if num 2 === 0 and math op === /, return "cant divide by 0"
    if (num2 === 0 && mathOperator === "/") {
        return "Can't divide by 0! Your console will explode"
    }
    //creating four else if statements that see if operator is +, -, /, *
    else if (typeof num1 === "number" && typeof num2 === "number" && mathOperator === "+") {
        return num1 + num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && mathOperator === "-") {
        return num1 - num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && mathOperator === "*") {
        return num1 * num2
    }
    else if (typeof num1 === "number" && typeof num2 === "number" && mathOperator === "/") {
        return num1 / num2
    }
    // creating a catch all in case arguments dont match paramenters
    else {
        return "Please make sure you enter a number, an operator, and another number"
    }
}
// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

console.log(calculator("hi", "+", 0))



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

//create a function that takes in an array of strings

const ioChecker = (array) => {
    // filter each value in the array
    let ioOnly = array.filter(url => {
        // for each url, lowercase value
        // for the filter method, only return urls if they include ".io"
        return url.toLowerCase().includes(".io")
    }).join(" ").toLowerCase()
    // joining array into strings
    // the string
    return (ioOnly)
}

var websites = ["CODEPEN.IO", "CODECADEMY.COM", "coursera.org", "paper.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"
console.log(ioChecker(websites));




// --------------------7) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0

//write a function that takes a number
const counter = (number) => {
    // start counter at 0
    let i = 0
    // while i is less than number +1
    while (i < number + 1) {
        //log i
        console.log(i);
        //increment by i
        i++
    }
//uses while loop to coubt up to that number from o
}
// Sorry, idk if this is cheating LOL I wasn't able to print with a console.log on 207, so i included the console.log on 200 instead
counter(10);

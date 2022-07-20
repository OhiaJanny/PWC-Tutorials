//*data types 
let name = " Jane" //*
let age = 12 // number//
let z = null //undefined
let y = undefined // null
let isMarried = true // Amaka
let fiveColor = ['white', 'blue', 'yellow', 'purple', 'aqua']
console.log(age)

console.log(name);
console.log(age);

console.log(typeof y)

console.log(typeof isMarried)

//string
let x = "Hello World";
console.log(x.toUpperCase())

let w = "Hello World";
console.log(w.toLowerCase())
console.log(x.length)

//congattination //
let m = "i am"
let n = " i go to pwc bootcamp"
let p = " i love learning javaScript"
console.log(m + name + n + " and" + p)

//string literals
console.log(`${m}${name}${n}and${p}`)

//logging out
//alert("Hello World"); // do not use for debugging. stops script and only strings
console.error("This is an error");
console.warn("This is a warning")

//Arrays
let fruits = ["Mango", "Banna", "Cherry", "Berly"]
console.log(fruits)

//PUSH
fruits.push("mango")
fruits.push("Mango")
console.log(fruits)

//POP()
console.log(fruits)

//SHIFT
fruits.shift()
fruits.Banna

//Add Value
fruits[4] = "Berly"
console.log(fruits)

//Object Literals
const person = {
    name: "Amaka",
    age: 26,
    isMarried: false,
    weight: 45,
    height: 76,
    greeting: false,
    hobbies: ["Dancing", "Singing", "Playing"]
}
console.log(person.name)

//Accelerating object properties & methods
person.greeting;

//LOOPS
for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 2; i < 10; i++) {
    console.log(i)
}
for (let p = 4; p <= 8; p++) {
    console.log(p)
}

for (let w = 12; w <= 19; w++) {
    console.log(w)
}
for (let i = 1; i <= 10; i++) {
    console.log("Number is, i")
}

//while loop

let i = 1
while (i < 20) {
    console.log(`Number is : ${i}`)
    i++
}

// If statement
let f = 20

if (x == 20) {
    console.log(`x is 20`)
} else if (x == 10) {
    console.log(`x is not 20 or 10`)
}

// if (x == 90) {
//     console.log(`Excellence!`);
// } else if (score === 80) {
//     console.log(`Very good!`)
// } else if (score == 30) {
//     console.log(`Failed!`);
// } else {
//     console.log("You didn't write the exam !");
// }

let score = 100
if (score >= 70) {
    console.log("Distinction!");
} else if (score >= 60 && score <= 69) {
    console.log("Very Good");
} else if (score >= 49 && score <= 50) {
    console.log("Credit");
} else if (score >= 39 && score <= 40) {
    console.log("Pass");
} else {
    console.log("Failed");
}


//Num
function addNum(a, b) {
    return a + b
}
console.log(addNum(3, 2))
console.log(addNum(10, 20))

function substraction(f, g) {
    return f - g
}

function multiplication(t, r) {
    return t * r
}

//Arrow Functions
const squared = (v) => {
    return n * n;
}

//Function Remainder

const numMod = num => {
    return num % 2;
}
console.log(numMod(7))


for (let i = 2; i < 20; i += 2) {
    console.log(`Number is : ${i}`)
}
for (let i = 2; i < 20; i += 3) {
    console.log(`Number is : ${i}`)
}

// Convert string to array using split
let sumWord = "Adamu";
console.log(sumWord.split(``));

//Reverse an array
let sumArrays = ["a", "b", "c", "d", "e", "f"];
console.log(sumArrays.reverse())

// note you can only convert an array 

//convert string to array
function stringToArray(s) {
    return s.split(``)
}

//Revert a string
function reverseString(s) {
    return s.split(``).reverse().join()
}
console.log(reverseString("Hello"))

function isPalindrome(str) {
    let newstr = str.split('').reverse().join()
    if (str === newstr) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("Hello"))

//convert string to number
let str15 = "15"
let newNum = parseInt(str15)
console.log(newNum)

let newstr = newNum.toString()
console.log(newstr)

//interger pallidrome
function instPalindrome(num) {
    //convert the num to a string
    let numtostring = num.toString()
    let reverseString = numtostring.split('').reverse().join('')
    let newNum = Number(reverseString)
    if (newNum === num) {
        return true;
    } else {
        return false;
    }
}
console.log(instPalindrome(301))





//string metthods & properties
const s = "Hello"
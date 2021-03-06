const { before } = require("mocha");



// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
do { i = i + 1;
    console.log(i)
} while (i < 1000)


// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
  }


// Create a function that logs out the keys of the object using Object.keys().

let objKey = function(element){
    console.log(Object.keys(element))
  }
objKey(person);


// Create a function that logs out the keys and values of the object using Object.entries().

let objEntries = function(obj) {
    console.log(Object.entries(obj))
  }
objEntries(person);


// Create an arrayOfPersons that contains multiple "people" objects. You can simply 
// copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
    {
      firstName: 'Johnny',
      lastName: 'Tsunami',
      birthDate: 'Jan 15, 1990',
      gender: 'male'
    },
    {
      firstName: 'Alexa',
      lastName: 'Smith',
      birthDate: 'Aug 19, 1982',
      gender: 'female'
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      birthDate: 'May 2, 1999',
      gender: 'male'
    },
    {
      firstName: 'Charlotte',
      lastName: 'James',
      birthDate: 'Apr 20, 2000',
      gender: 'female'
    }
  ];


// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate 
// of each object if the birth year is an odd number.

let oddBdayYear = []
for (const i of arrayOfPersons) {
  let birthyear = element.birthDate.slice(-4);
  if (birthyear % 2 == 1) {
    oddBdayYear.push(element)
  }
}
console.log(oddBD);


// Use .map() to map over the arrayOfPersons and console.log() their information.

console.log(
    arrayOfPersons.map(function(element){
      return `Hello, my name is ${element.firstName} ${element.lastName} and I was born on ${element.birthDate}`
    })
  );


// Use .filter() to filter the persons array and console.log only males in the array.

arrayOfPersons.filter(function(element){
    if (element.gender == 'male') {
    console.log(element);
    }
  });


// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

let ageCheck = arrayOfPersons.forEach(function(index){
    birthYear = index.birthDate.slice(-4);
    console.log(birthYear);
    if (birthYear < 1990) {
      return true;
    }
    console.log(ageCheck);
  });


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let ageCheck2 = arrayOfPersons.filter(bornBefore1990); 
    function bornBefore1990(object){
    if(object.birthDate.split(' ')[2] < 1990){
        return object; 
    }
  };
console.log(ageCheck2);







//! All remaining lines are class notes...



// Loops
// Loop through code for however many times you specify, or
// until a certain condition is met
// you can run them on objects and arrays
// for of and for in loops, while loops, do-while, for loops


// 1. a statement that is run before the loop starts, executed only once
// 2. Loop asking, "Should I go again?", true/false statement, if resolves true, execute iteration
// 3. the code that should be executed for every iteration
// 4. what to do to prepare for the next iteration

// for(1; 2; 4) {
//     3;
// }

// let us print number 1-5
// 1. set a variable to hold the number 1
// 2. ask if the variable is less than or equal to 5
// 3. print the variable
// 4. increment the variable by 1

// for (let num = 1; num <= 5; num = num + 1) {
//     console.log(num);
// }

// for loop for all even numbers between 1-100

// for (let num = 2; num <= 100; num = num +2) {
//     console.log(num);
// }

// for (let num = 100; num >= 2; num = num -2) {
//     console.log(num);
// }

// better version

// for (let i = 1; i <= 100; i++) {
//     for (i%2 == 0) {
//         console.log(i);
//     }
// }

// pring fizz if the num is divisible by 3
// print buzz if the num is divisible by 5
// print fizzbuzz if the num is divisible by both

// for (let i = 1; i <= 45; i++) {
//     if (i%15 == 0) {
//         console.log("fizzbuzz");
//     }
//     else if (i%3 == 0) {
//         console.log("fizz");
//     }
//     else if (i%5 == 0) {
//         console.log("buzz");
//     }
//     else {
//         console.log(i);
//     }   
// }






// while loops
// keep executing this loop as long as the condition remains true


// while (not done) {
//     do work;
//     check to see if done;
// }


// let number = 0;

// console.log("Before the loop");
// while(number < 4) {
//     console.log(number);
//     number = number++;
// }
// console.log("After the loop");


// let num = 10;
// while (num >0) {
//     console.log(num);
//     num = num -1;
// }



// let fruit = [
//     'apple',
//     'banana',
//     'cucumber',
//     'dragon fruit',
//     'elderberry',
//     'fig',
//     'grapefruit',
//     'honeysuckle'
// ]

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);

// for (i = 0; i < fruit.length; i++) {
//     console.log(i);
//     console.log(fruit[i]);
// }
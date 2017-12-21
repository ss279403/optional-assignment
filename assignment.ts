//The Tallest Mountain

//Create an array that contains a bunch of numbers representing the heights of various mountains. Write some code that identifies the height of the tallest of the available mountains and prints it out.

let mountain = [2000, 1500, 500, 600, 700];
let max = mountain.reduce(function (c, d) {
    return Math.max(c, d);
});
console.log(max);


//Hangman Lite

//Create a variable called word that contains a hangman word, and create a second variable called letter that indicates the letter that the player guessed. Print out "Yeah, the letter x exists y times in my word" if the letter exists (but substitute the actual letter and the number of times). If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."


let word = "balloon";
let letter = "B";
let num = word.split(new RegExp(letter, "i")).length - 1;
word.match(/letter/i);

if (num >= 1) {
    console.log(`Yeah, the letter ${letter} exists ${num} times in my word`);
} else {
    console.log(`Nope, that letter doesn't exist in my word.`)
};

//  Cherokee Hare

//   There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable rates and never seem to die. Fortunately, some engineers figured out to write some code to describe it's future population. Wildlife experts rejoice! Create a variable called startingPopulation that keeps track of the initial population of hares, a variable called birthRate that keeps track of what percentage is born each week, and a variable called numberOfWeeks that represents how long we're trying to simulate. Print out "There will be x Cherokee Hares after y weeks" but replace x with the number of hares and y with the number of weeks.

let startingPopulation = 200;
let birthRate = 1;
let numberOfWeeks = 20;

let numOfBirths = (birthRate * numberOfWeeks) + startingPopulation;

console.log(`There will be ${numOfBirths} Cherokee Hares after ${numberOfWeeks} weeks.`)

// Change machine

// Imagine we have a very versatile change machine. Create a variable called amount stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

// After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).


let amount = 47;
let arr = [];
let twenties = 0;
let tens = 0;
let fives = 0;
let ones = 0;

while (amount >= 20) {
    amount = amount - 20;
    twenties += 1;
}
arr.push(twenties);

while (amount >= 10) {
    amount = amount - 10;
    tens += 1;
}
arr.push(tens);

while (amount >= 5) {
    amount = amount - 5;
    fives += 1;
}
arr.push(fives);

while (amount >= 1) {
    amount = amount - 1;
    ones += 1;
}
arr.push(ones);

console.log(arr);


//Finding palindromes

//Create a variable called word that stores a word we want to test as a palindrome. Write some code that prints out "true" if word is a palindrome, or "false" if its not.

let word1 = "racecar";
let splitWord1 = word1.split("");
let reverseWord1 = splitWord1.reverse();
let joinWord2 = reverseWord1.join("");
    if (word1 === joinWord2) {
        console.log(true);
    } else {
        console.log(false);
    }


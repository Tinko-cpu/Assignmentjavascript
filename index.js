/*
ASSIGNMENT RULES
– All the answers must be written in JavaScript
– You can ask for help, reach the Teaching Assistants if needed
– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet
– You can test your code in a separate file or de-commenting the single exercises in this one.
– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.
– Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
Create a variable called test and assign a string value to it.
*/

let test = "Angela";

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20;

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let randNumber = Math.floor(Math.random() * 20);
let random = randNumber;

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Nurudeen",
    surname: "Oseni",
    age: 30,
}

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age;
console.log("************************* Result E *******************************")
console.log(me);


/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log("************************* Result F *******************************")
console.log(me);

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

delete me.skills.pop();
console.log("************************* Result G *******************************")
console.log(me)

// JS Functions
/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice(){
    let randDice = Math.ceil(Math.random() * 6) ;
    return randDice;
}
console.log("************************* EXERCISE 1 *******************************")
console.log(dice());

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
const whoIsBigger = function(a, b){
    if(a > b){
        return a;
    }else {
        return b;
    }

}

console.log("************************* EXERCISE 2 *******************************")
console.log(whoIsBigger(30, 20));

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe(“I love coding”) => returns [“I”, “Love”, “Coding”]
*/

const splitMe = word => word.split(" ");
console.log("************************* EXERCISE 3 *******************************");
console.log(splitMe("I Love coding"));

/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
function deleteOne(word, isTrue){
    if(isTrue === true){
        return word.slice(1);
    }else {
        
        return word.slice(0, -1);
    }
}
console.log("************************* EXERCISE 5 *******************************")
console.log(deleteOne("Akeem", false));
/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters(“I have 4 dogs”) => returns “I have dogs”
*/

function onlyLetters(word){
    let newWord = word.split(" ,");
   
}

/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/
function whatDayIsIt(){
    let myDate = new Date()
    let day = myDate.getDay()
    return day
}
console.log("************************* EXERCISE 7 *******************************")
console.log(whatDayIsIt());

/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/

function rollTheDices(num){
    let sum = 0;
    let myDiceArray = [];
    
    for(let i = 0; i < num; i++){
        let myDice = dice();
        sum += myDice;
        
        myDiceArray.push(myDice);
        
        
    }
    console.log(sum, myDiceArray);

}

console.log("************************* EXERCISE 7 *******************************");
rollTheDices(5);


/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

function countMovies(myArray){
    return myArray.length;
}



/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
function onlyTheTitles(myArray){
    let newArray = [];
    for(let i = 0; i < myArray.length; i++){
        let myTitle = myArray[i].Title;
        newArray.push(myTitle);
    }
    
    return newArray;
}


/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/
function onlyInThisMillennium(myArray){
    let newMill = [];
    for(let i = 0; i < myArray.length; i++ ){
        if(myArray[i].Year >= 2000){
             newMill.push(myArray[i]);
        }
    }
 
    return newMill;
}

/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
function getMovieById(myId){
    for(let i = 0; i < this.movies.length; i++){
        let id = this.movies[i];
        
    }
}


/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

function sumAllTheYears(myArray){
    let sumArray = [];
    let total = 0;
    for(let i = 0; i < myArray.length; i++){
        sumArray.push(myArray[i].Year);
        total += myArray[i].Year;
    }
    console.log(Number(total));
    return sumArray;
}



/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

function searchByTitle(word){
    for(let i = 0; i < word.length; i++){
        
        return word[i].Title
    }
    
}

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
Write a function called “removeIndex” which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

function removeIndex(num){
    let myRemove = delete movies[num]
    return myRemove;
}


// [EXTRAS] JS Advanced

/* EXERCISE 21
Create a function called “halfTree” which receives a number as a parameter and builds an “*” half tree with the given height.
Example:
halfTree(3)
*
**
***
*/





/* EXERCISE 22
Create a function called “tree” which receives a number as a parameter and builds an “*” tree with the given height.
Example:
tree(3)
*
***
*****
*/
function tree(num){
    let astric = "*";
    for(let i = 1; i < num + 1; i++){
        return astric;
    }
}

console.log(tree(5));


/* EXERCISE 23
Create a function called “isItPrime” that receives a number as a parameter and returns true if the given number is a prime number.
*/
function isItPrime(num){
    let isPrime = true;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
        }
    if(isPrime){
        return "is prime";
    }else {
        return "is not prime";
    }
    }
}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.
*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

const movies = [
{
Title: "The Lord of the Rings: The Fellowship of the Ring",
Year: "2001",
imdbID: "tt0120737",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
},
{
Title: "The Lord of the Rings: The Return of the King",
Year: "2003",
imdbID: "tt0167260",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
},
{
Title: "The Lord of the Rings: The Two Towers",
Year: "2002",
imdbID: "tt0167261",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
},
{
Title: "Lord of War",
Year: "2005",
imdbID: "tt0399295",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
},
{
Title: "Lords of Dogtown",
Year: "2005",
imdbID: "tt0355702",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
},
{
Title: "The Lord of the Rings",
Year: "1978",
imdbID: "tt0077869",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
},
{
Title: "Lord of the Flies",
Year: "1990",
imdbID: "tt0100054",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
},
{
Title: "The Lords of Salem",
Year: "2012",
imdbID: "tt1731697",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
},
{
Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
Year: "1984",
imdbID: "tt0087365",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
},
{
Title: "Lord of the Flies",
Year: "1963",
imdbID: "tt0057261",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
},
{
Title: "The Avengers",
Year: "2012",
imdbID: "tt0848228",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
},
{
Title: "Avengers: Infinity War",
Year: "2018",
imdbID: "tt4154756",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
},
{
Title: "Avengers: Age of Ultron",
Year: "2015",
imdbID: "tt2395427",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
},
{
Title: "Avengers: Endgame",
Year: "2019",
imdbID: "tt4154796",
Type: "movie",
Poster:
"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
},
];

console.log("************************* EXERCISE 13 *******************************")
console.log(countMovies(movies));

console.log("************************* EXERCISE 14 *******************************")
console.log(onlyTheTitles(movies));

console.log("************************* EXERCISE 15 *******************************")
console.log(onlyInThisMillennium(movies));

console.log("************************* EXERCISE 17 *******************************")
console.log(sumAllTheYears(movies))

console.log("************************* EXERCISE 18 *******************************")
// console.log(searchByTitle());

console.log("************************* EXERCISE 23 *******************************")
console.log(isItPrime(7));
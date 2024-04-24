//NUMBER 70!!!

/*
You are given two sorted arrays that both only contain integers. 
Your task is to find a way to merge them into a single one, sorted in asc order.
 Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/

//MY SOLUTION
function compareNumbers(a, b) {
  if (a < b ) {
    return -1;
  } else if (a > b ) {
    return 1;
  }
  return 0;
}


function mergeArrays(arr1, arr2) {
  let arr3 =  [...new Set(arr1.concat(arr2))];
  return arr3.sort(compareNumbers)
}

//NUMBER 69!!!

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

//MY SOLUTION
function grow(x){
  let keepMultiplying = 1
  for (let i = 0; i < x.length; i++) {
    keepMultiplying *= x[i]
  }
    return keepMultiplying
  }

//NUMBER 68!!!

/*
In this simple exercise, you will build a program that takes a value, integer , and 
returns a list of its multiples up to another value, limit . If limit is a multiple of integer, 
it should be included as well. There will only ever be positive integers passed into the function, 
not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, 
and 6 are the multiples of 2 up to 6.

*/

//MY SOLUTION
function findMultiples(integer, limit) {
  //your code here
  let multiples = []
  for (let i = 1; i <= limit; i++) {
    if ((i % integer) === 0) {
      multiples.push(i)
    }
  }
  return multiples
}


//NUMBER 67!!!

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

//MY SOLUTION
function maps(x){
  return x.map(number => number * 2)
  
}


//NUMBER 66!!!

/*
Our counter prototype is broken. Can you spot, what's wrong here?
function Counter() {
  this.value = 0;
}

Counter.prototype.increase() {
  this.value++;
};

Counter.prototype.getValue() {
  return this.value;
};

Counter.prototype.reset() {
  this.value = 0;
};
*/

//MY SOLUTION
function Counter(value) {
  this.value = 0;


this.increase = function() {
  this.value++;
};

this.getValue = function() {
  return this.value;
};

this.reset = function() {
  this.value = 0;
};
  }


//NUMBER 65!!!

/*
After a hard quarter in the office you decide to get some rest on a vacation. 
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, 
you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

//MY SOLUTION
function rentalCarCost(d) {
  // Your solution here
  let totalCost = 0
  
  switch (true) {
      case (d >= 7):
      totalCost = (40 * d) - 50;
      break;
      
      case (d >= 3):
      totalCost = (40 * d) - 20;
      break;
      
      default:
      totalCost = (40 * d);
  }
  return totalCost;
}

//NUMBER 64!!!

/*
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

//MY SOLUTION
function Warrior(n){
  let name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
//NUMBER 63!!!

/*
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

//MY SOLUTION
class Ghost {
  // your code goes here
  constructor(color) {
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  
};

//NUMBER 62!!!

/*
Teach snoopy and scooby doo how to bark using object methods.
 Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
*/

//MY SOLUTION
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
};

//NUMBER 61!!!

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//MY SOLUTION
function longest(s1, s2) {
  // your code
  let prepedString =(s1 + s2).split('').filter((c, i, self) => {
 return self.indexOf(c) === i;
  })
  return prepedString.sort().join('')
}


//NUMBER 60!!!

/*
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the 
Constructor method to accept a name as string and an age as number, 
complete the get Info property and getInfo method/Info getter which should return johns age is 34
*/

//MY SOLUTION
class Person {
  constructor(name, age) {
    this.name=name;
    this.age=age;
  }
  get info() {
      return `${this.name}s age is ${this.age}`
    }
}

//NUMBER 59!!!

/*
Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

You begin with writing a generic Ship class / struct:

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
const titanic = new Ship(15, 10);
Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
Good luck and may you find GOOOLD!
*/

//MY SOLUTION
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt() {
  const crewWeight = this.crew * 1.5
  const draftWithoutCrew = this.draft - crewWeight
  if (draftWithoutCrew > 20) {
    return true
  } else {
    return false
  }
  
}
  }


//NUMBER 58!!!

/*
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. 
You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return 
the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
*/

//MY SOLUTION
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}





//NUMBER 57!!!

/*
You probably know the "like" system from Facebook and other pages. People can "like" 
blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

//MY SOLUTION

function likes(names) {
  // TODO
  let text;

  switch(names.length) {
      
    case 0:
    text = "no one likes this"
    break;
      
    case 1:
    text = `${names[0]} likes this`
      break;
      
    case 2:
    text = `${names[0]} and ${names[1]} like this`
     break;
      
    case 3:
    text = `${names[0]}, ${names[1]} and ${names[2]} like this`
     break;
      
    default: 
    text = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
     
  }
return text
  
}

//NUMBER 56!!!

/*
Improving Math.round(x)
Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

Math.round(3.14); // Returns 3
Math.round(17.43); // 17
Math.round(198.499); // 198
Math.round(200.5); // 201
Math.round(1784.76); // 1785
But that is sometimes not enough! What if we wanted to 
round 3.1415926535 to two decimal places? While some languages (such as PHP) has a 
round() function that supports rounding to a 
specified number of decimal 
places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) ?>), Javascript does not!

Task
Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

 may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
*/

//MY SOLUTION
Math.roundTo = function (number, precision) {
  // TODO: Program Me
  let newNumber = Number(number.toFixed(precision));
  return newNumber
}

//NUMBER 55!!!

/*
SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
Objective
Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
You are then given a working class Labrador as your initial code.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Shorten it so that it meets the strict character count requirements for this Kata.
*/

//MY SOLUTION
class Labrador {
  constructor(n, a, g, m) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = m;
    this.loyal = true;
  }
}


//NUMBER 54!!!

/*
Fun with ES6 Classes #1 - People, people, people
Time for some OOP fun!

Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), 
lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender 
(defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, 
this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one
 parameter raceName and returns "Welcome to Planet Earth raceName". For example, if 
 the race name is "Martians", it should say "Welcome to Planet Earth Martians"
You may use any valid syntax you like; however, it is highly recommended that
 you complete this Kata using ES6 syntax and features.

Have fun! :D
*/

//MY SOLUTION
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

//NUMBER 53!!!

/*
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//MY SOLUTION
function arrayPlusArray(arr1, arr2) {
  return (arr1.reduce((acc, curr) => acc + curr) + arr2.reduce((acc, curr) => acc + curr)); 
}
//NUMBER 52!!!

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

//MY SOLUTION
function invert(array) {
  const invertedArray = [];
  for (let i = 0; i < array.length; i++) {
    invertedArray.push(-array[i]);
  }
  return invertedArray;
}

//NUMBER 51!!!

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

//MY SOLUTION
function multipleOfIndex(array) {
  // good luck
  let filterByIndex = []
  if(array[0] === 0) 
    filterByIndex.push(0)
  for(let i = 1; i < array.length; i++) {
     if (array[i] % i === 0) {
       filterByIndex.push(array[i])
     }
    
}
  return filterByIndex
  }
//NUMBER 50!!!

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

//MY SOLUTION
function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  
  arr.sort((a, b) => b - a); // Sort the array in descending order
  let sum = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1]; // Sum the differences between consecutive elements
  }
  
  return sum;
}


//NUMBER 49!!!

/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

//MY SOLUTION
function testEven(n) {
if (n % 2 === 0) {
  return true
}
else {
  return false
}
}


//NUMBER 48!!!

/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/

//MY SOLUTION
function friend(friends){
  
const result = friends.filter((word) => word.length == 4);

return result
  }


//NUMBER 47!!!

/*
In this kata you will create a function that takes a list of non-negative integers and strings and 
returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//MY SOLUTION
function filter_list(l) {
  // Return a new array with the strings filtered out
  let gotThisList = []
  for (let i = 0; i < l.length; i++) {
    if (typeof(l[i]) === "number") {
      gotThisList.push(l[i])
    }
  }
  return gotThisList
}


//NUMBER 46!!!

/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//MY SOLUTION
function XO(str) {
  //code here
let oCount = 0
let xCount = 0
let newStr = str.toLowerCase()
for (let i = 0; i <= str.length; i++) {
    if (newStr[i]=== 'o') {
        oCount++
    }
    if (newStr[i] === 'x') {
        xCount++
    }
    
}
  if (xCount === oCount) {
      return true
  }
  else {
      return false
  }
}

//NUMBER 45!!!

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//MY SOLUTION

function solution(str){
  return str.split('').reverse().join('')
}

//NUMBER 44!!!

/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"
*/

//MY SOLUTION
function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

//NUMBER 43!!!

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
 It is composed of four 
nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine.
 In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. 
All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

//MY SOLUTION

function DNAtoRNA(dna) {
  let newDNA = dna.split('')
  for (let i = 0; i < newDNA.length; i++) {
    if (newDNA[i] === "T") {
      newDNA[i] = "U"
    }
  }
  return newDNA.join('')
}


//NUMBER 42!!!

/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

//MY SOLUTION
function nameShuffler(str){
  let newStr = str.split(' ')
  return newStr.reverse().join(' ')
  
}


//NUMBER 41!!!

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

//MY SOLUTION
function shortcut (string) {
  let nonVowels = [];
  let prepared = string.split('');
  for (let i = 0; i <= prepared.length; i++) {
    if (prepared[i] !== 'a' && prepared[i] !== 'e' && prepared[i] !== 'i' && 
       prepared[i] !== 'o' && prepared[i] !== 'u') {
       nonVowels.push(prepared[i])
    }
  }
    return nonVowels.join('')
}

//NUMBER 40!!!

/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did 
not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with 
"£" (= "\u00A3", JS, Go, Java, Scala, and Julia), 
"$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

//MY SOLUTION
function bonusTime(salary, bonus) {
  // your code here
    return `${"£"}${(bonus === true) ? (String(salary * 10)) : (String(salary))}`
    }

//NUMBER 39!!!

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

//MY SOLUTION
function booleanToString(b) {
  //your code here
  return String(b)
}



//NUMBER 38!!!

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

//MY SOLUTION
function areYouPlayingBanjo(name) {
  // Implement me
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} ${'plays banjo'}`
  }
    else {
      return `${name} ${'does not play banjo'}`
    }
  
  return name;
}


//NUMBER 37!!!

/*
Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

//MY SOLUTION
function greet(name){
  return `${"Hello,"} ${name} ${"how are you doing today?"}`
}



//NUMBER 36!!!

/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

//MY SOLUTION
function reverseList(list) {
  let newList = [];
    for(let i = list.length - 1; i >= 0; i--){
      newList.push(list[i]);
  }
    return newList
  }


//NUMBER 35!!!

/*
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" 
you can think of? What is a "hello world" solution you would want to show your friends?
*/

//MY SOLUTION
function greet() {
  return "hello world!"
}



//NUMBER 34!!!

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per 
hour and returns it in cm per second, rounded down to the integer (= floored). For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

//MY SOLUTION
function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 27.7778)
}



//NUMBER 33!!!

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/

//MY SOLUTION
function greet (name, owner) {
  if (name === owner) {
    return `Hello boss`
  } else {
    return `Hello guest`
  }
}

//NUMBER 32!!!

/*
Write a function which converts the input string to uppercase.

*/


//MY SOLUTION
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}


//NUMBER 31!!!

/*
You're writing code to control your town's traffic lights. 
You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of 
the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

*/


//MY SOLUTION
function updateLight(current) {
  
  //take astring
  //anazlyze and convert the string
  //return the new string
  if(current == "red") {
    return "green"
  }
  if (current == "yellow") {
    return "red"
  }
  if (current == "green") {
    return "yellow"
  }
  
  }


//NUMBER 30!!!

/*
Given 2 strings, a and b, return a string of the form short+long+short, with 
the shorter string on the outside and the longer string on the inside. The strings 
will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/



//MY SOLUTION
function solution(a, b){
  // your code here
  if (a.length < b.length) {
    return `${a}${b}${a}`
  } else {
    return`${b}${a}${b}`
  }
}


//NUMBER 29!!!

/*
Very simple, given a number (integer / decimal / both depending on the language), 
find its opposite (additive inverse).
*/

//MY SOLUTION
function opposite(number) {
  return (number * -1)
}


//NUMBER 28!!!

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is 
already negative?
*/

//MY SOLUTION
function makeNegative(num) {
  // Code?
  let newSum = num * -1
  if (Math.sign(num) == 1) {
    return newSum
  }
  else if (Math.sign(num)== - 1){
    return num
  }
  else {
    return 0
  }
    
}



//NUMBER 27!!!
/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to 
use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

//MY SOLUTION
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}


//NUMBER 26!!!
/*
You can print your name on a billboard ad. Find out how much it will cost you. 
Each character has a default price of £30, but that can be different if you are given 
2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/


//MY SOLUTION
function billboard(name, price = 30){
  return name.length / (1/price)

} 



//NUMBER 25!!!
/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

*/


//MY SOULUTION
function uefaEuro2016(teams, scores){
  // your code...
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if  (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}


//NUMBER 24!!!
/*
You need to write a function that reverses the words in a
 given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

*/


//MY SOULUTION
function reverse(string){
  //your code here
  
    let newString = string.split(' ')
  let output = [];
    for (var i = newString.length - 1; i> -1; i--){
        output.push(newString[i]);
    }

    return output.join(' ');

}

//NUMBER 23!!!
/*
The company you work for has just been awarded a contract to build a 
payment gateway. In order to help move things along, you have volunteered to 
create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument 
is sanitized before being passed to your function although you will need to account 
for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10


*/


//MY SOULUTION
function formatMoney(amount){
  // your formatting code here
  let newSum = amount.toFixed(2)
  return `${'$'}${newSum}`
  
}

//NUMBER 22!!!
/*

Write a function which removes from string all non-digit characters 
and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/


//MY SOULUTION
function getNumberFromString(s) {
  let thisIsNum = [] 
  for (let i = 0; i <= s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
        thisIsNum.push(s[i])
        }
  

}
  return parseInt(thisIsNum.join(''))
}


//NUMBER 21!!!
/*
There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) 
it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase 
"tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a 
solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or 
"three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.


*/


//MY SOULUTION

function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  if (s.includes("3.50")  || s.includes("three fifty") || s.includes("tree fiddy") ){
    return true
  } else {
    return false
  }
}

//NUMBER 20!!!
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/


//MY SOULUTION
function removeExclamationMarks(s) {
  let newString = s.split('')
  let newArr = [];
  for (let i = 0; i <= newString.length; i++) {
    if (newString[i] !== '!') {
      newArr.push(newString[i])
    }
  }
  return newArr.join('')
}

//NUMBER 19!!!

/*
You will be given an array a and a value x. All you need to do 
is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

//MY SOULUTION
function check(a, x) {
  // your code here
  if(a.includes(x)) {
    return true
  } else {
    return false
  }
}



//NUMBER 18!!!

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!


*/

//MY SOULUTION
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let avg  = 0 
  let newSum = classPoints.length + 1
  classPoints.forEach((point) => (avg += point ))
  if ((avg/newSum) > yourPoints) {
    return false
  } else if ((avg/newSum) < yourPoints) {
    return true
  }
  
  
}


//NUMBER 17!!!

/*
DESCRIPTION:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.


*/

//MY SOULUTION
function isVow(a){
  for (let i=0; i <=a.length; i++) {
    if (a[i] == 101) {
      a[i] = 'e'
    } if (a[i] == 105) {
      a[i] =  'i'
    } if (a[i] == 111) {
      a[i] = 'o'
    } if (a[i] == 117) {
      a[i] = 'u'
    } if (a[i] == 97) {
      a[i] = 'a'
    }
    
  }
  return a
  }

//NUMBER 16 !!!

/*
Your boss decided to save money by purchasing some cut-rate optical character recognition 
software for scanning in the text of old novels to your database. 
At first it seems to capture words okay, but you quickly notice that it throws
 in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to 
take this garbled text and remove all of the numbers. Your program will take in a string and clean 
out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

*/

//MY SOULUTION
function stringClean(s) {
  let newS = '';
  for (let i = 0; i < s.length; i++) {
    // Check if the character is not a digit
    if (isNaN(s[i]) || s[i] === ' ') {
      newS += s[i];
    }
  }
  return newS;
}

//NUMBER 15 !!!

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not 
any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/

//MY SOULUTION
function getDrinkByProfession(param){
  if (param.toUpperCase() === "JABRONI") {
    return "Patron Tequila"
  } else if ( param.toUpperCase() === "SCHOOL COUNSELOR") {
    return "Anything with Alcohol"
  } else if ( param.toUpperCase() === "PROGRAMMER") {
    return "Hipster Craft Beer"
  } else if ( param.toUpperCase() === "BIKE GANG MEMBER") {
    return "Moonshine"
  } else if ( param.toUpperCase() === "POLITICIAN") {
    return "Your tax dollars"
  } else if (param.toUpperCase() ==="RAPPER")  {
    return "Cristal"
  } else {
    return "Beer"
  }

}

//NUMBER 14 !!!

/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/

//MY SOULUTION
function stringToArray(string){

	// code code code
  return string.split(' ')

}


//NUMBER 13 !!!
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

//MY SOULUTION
function abbrevName(name){

return `${name[0].toUpperCase()}.${name[name.indexOf(' ') + 1].toUpperCase()}`

}


//NUMBER 12 !!!
/*
Given a string of digits, you should replace any digit below 5 with '0' 
and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

//MY SOULUTION
function fakeBin(x){
  let newDigits = x.split('');
  
  for (let i = 0; i <= newDigits.length; i++) {
    if (Number(newDigits[i]) < 5) {
      newDigits[i] = 0
    } else if (Number(newDigits[i]) >= 5) {
      newDigits[i] = 1
    }
    
  }
  return newDigits.join('')
}

//This is an 8kyu kata


//NUMBER 11!!!
//This is an 8KYU Kata
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, 
return 'Publish!', if there are more than 2 return 'I smell a series!'.
 If there are no good ideas, as is often the case, return 'Fail!'.
*/

//MY SOLUTION
function well(x){
  let goodSum = 0;
  let badSum = 0;
  
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === 'good') {
      goodSum = goodSum + 1
    } 
    else if (x[i] === 'bad') {
      badSum = badSum + 1
    }
    
  }
  
  if (goodSum == 1 || goodSum == 2) {
      return 'Publish!'
    } else if (goodSum > 2) {
      return 'I smell a series!'
    } else if (goodSum == 0) {
      return 'Fail!'
    }

}

//NUMBER 10!!!
//THIS IS AN 8KYU KATA
/*
//Simple Comparison?
Write a function that will compare two values, one will be a number and one will be a string. 
Return true if they are the same character (regardless of their different data types) and return false if they 
are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the 
built
 in methods including .toString(), .join(), .split(), parseInt and .Number().
*/
//MY SOLUTION
function add(a, b){
	// code here
  if (a == b) {
    return true
  } else {
    return false
  }
}

//NUMBER 9 !!!!!
//This is an 8kyu kata
/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can 
assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/


//MY SOLUTION
function remove (string) {
  //coding and coding...
  let procedure = string.split('')
    for (let i = procedure.length-1; i >= 0; i--) {
      if  (procedure[procedure.length-1] === '!') {
        procedure.pop()
      }
      return procedure.join("")
    }


//NUMBER 8 !!!!!
/*This kata is about multiplying a given number by eight 
if it is an even number and by nine otherwise.
*/

//MY SOLUTION"
function simpleMultiplication(number) {
  // your code........
if (number % 2 === 0) {
  number = number * 8
  return number
}
else {
  number = number * 9
  return number
}
}

//NUMBER SEVEN!!!!!!
/*

Your job is simple, if x squared is more than 1000, return It's 
hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).
*/

//MY SOLUTION:
function apple(x){
  if ((x ** 2) > 1000) {
    return "It's hotter than the sun!!"
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }

}


//NUMBER SIX!!!!!!
//This is an 8kyu kata string problem
/*
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a 
function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other 
methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

*/


//My Solution:
function joinStrings(string1, string2){
  // code here
 return `${string1} ${string2}`
}

// NUMBER FIVE!!!!!!
//This is an 8kyu kata problem
/*Don Drumphet lives in a nice neighborhood, 
but one of his neighbors has started to let his house go. 
Don Drumphet wants to build a wall between his house and his neighbor’s, 
and is trying to get the neighborhood association to pay for it. He begins 
to solicit his neighbors to petition to get the association to build the wall. 
Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, 
and can only remember two letters from each of his neighbors’ names. As he collects signatures, 
he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name 
as an array. If the number of the characters in name is less than or equal to two, 
it will return an array containing only the name as is"
*/

//My Solution
function whoIsPaying(name){
  //your code here
  let displayName = [];
  if (name.length > 2) {
    displayName.push(name, name.slice(0,2))
  } else {
    displayName.push(name.slice(0))
  }
  return displayName
}


// NUMBER FOUR!!!!!!
//This is an 8kyu kata problem
/*
Your coworker was supposed to write a simple helper function to capitalize a string 
(that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. 
Fix the helper function they wrote so that it works as intended 
(i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:
*/
//my soulution
function capitalizeWord(word) {
  let newChar = word[0].toUpperCase() + word.slice(1);

  return newChar;
}


// NUMBER THREE !!!!!!
//8kyu kata
//The problem: 
/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/
//My solution:

function defineSuit(card) {
  // good luck
  if(card.includes('♣') === true) {
    return 'clubs'
  } else if (card.includes('♦') === true) {
    return 'diamonds'
  } else if (card.includes('♥') === true) {
    return 'hearts'
  } else if (card.includes('♠') === true) {
    return 'spades'
  }
}



// NUMBER TWO!!!!!!
//THIS IS AN 8 KYU KATA

// Convert boolean values to strings 'Yes' or 'No'.

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//solution 1
function boolToWord( bool ){
    switch(bool) {
        case true:
        return 'Yes';
        case false:
        return 'No'
    }
  }

  //solution 2
  function boolToWord( bool ){
    if (bool == true) {
        return "Yes"
  }
     if (bool == false) {
        return "No"
    }
    
  }


// NUMBER ONE !!!!!!
//This is an 8kyu kata
//Beginner Series #1 School Paperwork

/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' 
classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

  //my solution
  function paperwork(n, m) {
  
    let pagesNeeded = n * m
    if (n < 0 || m < 0) {
      return 0
    }
    else {
      return pagesNeeded
    }
  }
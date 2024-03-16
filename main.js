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
Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built
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

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

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
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

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
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

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
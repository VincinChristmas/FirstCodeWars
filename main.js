

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
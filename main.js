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
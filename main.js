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

// URLify 

function urlify (string, n) {
  //Iterate through all characters in the string and check to see if its a whitespace
  let result = '';
  for (var i = 0; i < string.length; i++ ) {
    if ( string[i] = ' ' && i < n ) {
      
      result = result + '%20'
    } else {
      result = result + string[i]
    }
  }

  console.log(result);
  return result;
}

urlify('Mr John Smith     ', 13)
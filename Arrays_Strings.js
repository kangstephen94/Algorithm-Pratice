// URLify 

function urlify (string, n) {
  //Iterate through all characters in the string and check to see if its a whitespace
  let result = '';
  for (var i = 0; i < string.length; i++ ) {
    if ( string[i] === ' ' && i < n ) {
      result = result + '%20'
    } else {
      result = result + string[i]
    }
  }

  console.log(result);
}

//Test
urlify('Mr John Smith     ', 13)

// Palindrome Permutation

function palindromePerm (string) {
  let map = {};
  for (var i = 0; i < string.length; i++) {
    const key = string[i].toLowerCase();
    map[key] = (map[key] + 1) || 1;
  }

  var keys = Object.keys(map);
  var values = keys.map(function (v) { return map[v]; });

  const result = values.filter( (value) => {
    return value % 2 === 1
  })

  if (result.length > 1) {
    console.log(false)
    return false
  } else {
    console.log(true)
    return true
  }
}

palindromePerm('palindrome')

//One Away, first try

// function oneAway (string1, string2) {
//   let map = {};
//   for (var i = 0; i < string1.length; i++) {
//     const key = string1[i].toLowerCase();
//     map[key] = map[key] + 1 || 1;
//   }

//   for (var j = 0; j < string2.length; j++) {
//     const key = string2[j].toLowerCase();
//     if (map[key]) {
//       map[key] = map[key] - 1 
//     }
//   }

//   var keys = Object.keys(map);
//   var values = keys.map(function (v) { return map[v]; });

//   console.log(values)
//   const result = values.filter( value => {
//     return value !== 0
//   })

//   console.log(result)

//   if (result.length > 1) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(true);
//     return true;
//   }
// }

//OneAway final version

function oneAway(string1, string2) {
  if (string1.length === string2.length) {
    return checkReplacement(string1, string2);
  } else if (string1.length + 1 === string2.length) {
    return checkEdit(string1, string2);
  } else if (string1.length - 1 === string2.length) {
    return checkEdit(string2, string1);
  }
  return false  
}

function checkReplacement(string1, string2) {
  var difference = false;
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      if (difference) {
        return false
      }
      difference = true
    }
  }
  return true
}

function checkEdit(string1, string2) {
  var index1 = 0
  var index2 = 0
  while (index1 < string1.length && index2 < string2.length) {
    if (string1[index1] !== string2[index2]) {
      if (index1 !== index2) {
        return false
      }
      index2 += 1
    } else {
      index1 ++
      index2 ++
    }
  }
  return true
}

oneAway('pale', 'bale')
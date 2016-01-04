function truncate(str, num) {
/*
  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
  
  If the num is less than or equal to 3, then the length of the three dots is not added to the string length.
*/
  lenOfStr = str.length;
  var newStr = "";
  if (lenOfStr > num && num > 3) {
    newStr = str.slice(0,num-3).concat("..."); 
    return newStr;
  }
  if (lenOfStr <= num) {
    return str;
  }
  if (lenOfStr > num && num <= 3) {
    newStr = str.slice(0,num).concat("...");
    return newStr;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
//      should return "A-tisket...".
// truncate("A-", 1) should return "A...". 
// truncate("A-tisket a-tasket A green and yellow basket",
//          "A-tisket a-tasket A green and yellow  
//           basket".length + 2) 
//         should return "A-tisket a-tasket A green and yellow basket".
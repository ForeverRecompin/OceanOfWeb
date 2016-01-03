function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, ""); // Get rid of everything 
  var strArr = str.split(''); 		  //that isn't an alphanumeric char.
  var revArr = strArr.reverse();
  var revStr = revArr.join('');
  return str == revStr;
}


//console.log(palindrome("mom"));
//console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
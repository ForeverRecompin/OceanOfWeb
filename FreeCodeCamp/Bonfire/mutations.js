function mutation(arr) {
  /*
  Return true if the string in the first element of the 
  array contains all of the letters of the string in the 
  second element of the array.
  */
  var firstStr = arr[0].toLowerCase();
  var secondStr = arr[1].toLowerCase();
  var lenOfFirstStr = firstStr.length;
  var lenOfSecondStr = secondStr.length;
  var count = 0;
  for (var i=0; i<lenOfFirstStr; i++) {
    for (var j=0; j<lenOfSecondStr; j++) {
      if (firstStr[i] == secondStr[j]) {
        count += 1;
      }
    }
  }
  if (count >= lenOfSecondStr) {
    return true;
  }
  return false;
}

//mutation(["hello", "hey"]); // should return false.
mutation(["Mary", "Army"]); // should return true. 
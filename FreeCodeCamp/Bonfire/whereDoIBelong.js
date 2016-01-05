function where(arr, num) {
  /*
  Return the lowest index at which a value (second argument) 
  should be inserted into an array (first argument) once it 
  has been sorted.
  */
  var placeholderIndex = 0;
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  var found = false;
  var lenOfArr = arr.length;
  for (var i = 0; i < lenOfArr; i++) {
    if (arr[i] >= num) {
      placeholderIndex = i;
      found = true;
      break;
    }
  }
  if (!found) {
    return (lenOfArr);
  }
  return placeholderIndex;
}
//where([10, 20, 30, 40, 50], 35); // should return 3. 

where([2,
5,
10], 15); // should return 3. 

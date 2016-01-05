function destroyer(arr) {
  /*
  You will be provided with an initial array (the first argument 
  in the destroyer function), followed by one or more arguments.
  Remove all elements from the initial array that are of the 
  same value as these arguments.
  */
  var args = Array.prototype.slice.call(arguments); // Converts all arguments to an array.
  var restOfTheArr = args.slice(1);
  arr = args[0];
  var lenOfRestOfTheArr = restOfTheArr.length;
  var lenOfTheArr = arr.length;
  for (var i = 0; i < lenOfRestOfTheArr; i++) {
    for (var j = 0; j < lenOfTheArr; j++) {
      if (restOfTheArr[i] == arr[j])
      delete arr[j];
    }
  }
  return arr.filter(function (val) { // Gets rid of all the falsy values
    return Boolean(val);
  });
}
destroyer([3,
5,
1,
2,
2], 2, 3, 5); // should return [1].

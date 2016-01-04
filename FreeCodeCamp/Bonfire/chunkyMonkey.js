function chunk(arr, size) {
  /*
    Write a function that splits an array (first argument) into groups 
    the length of size (second argument) and returns them as a 
    multidimensional array.
  */
  
  var lenOfArr = arr.length;
  var groupedArr = [];
  var intermediateArr = [];
  for (var i=0; i<lenOfArr; i++) {
    intermediateArr = arr.slice(i, i+size);
    groupedArr.push(intermediateArr);
    i = i + size -1;
  }
  return groupedArr;
}

chunk(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
//chunk([0, 1, 2, 3, 4, 5], 4)  // should return [[0, 1, 2, 3], [4, 5]].
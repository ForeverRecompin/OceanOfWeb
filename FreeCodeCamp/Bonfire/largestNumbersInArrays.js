function largestOfFour(arr) {
  var lengthArr = arr.length;
  var max = 0;
  var maxArr = [];
  for (var i=0; i<lengthArr; i++) {
    max = arr[i][0]; 
    for (var j=0; j<arr[i].length; j++) {
       if(arr[i][j] > max) {
        max = arr[i][j];
      } 
    }
    maxArr.push(max);
  }
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
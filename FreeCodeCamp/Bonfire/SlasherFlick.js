function slasher(arr, howMany) {
  /*
  Return the remaining elements of an array after 
  chopping off n elements from the head.
  */
  return arr.splice(howMany);
}


slasher([1, 2, 3], 2) ; // should return [3]. 
//slasher([1, 2, 3], 0);// should return [1, 2, 3].
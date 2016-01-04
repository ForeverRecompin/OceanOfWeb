function bouncer(arr) {
  /*
  Remove all falsy values from an array.
  Falsy values in javascript are false, null, 0, "", undefined, and NaN.
  */
  arr =  arr.filter(function (val) {
    return (val !== false && val !== null && val !== 0 && val !== "" && val !== undefined && val === val);
    // val === val works because a NaN is not equal to a NaN. 
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9]. 
//bouncer([false, null, 0, NaN, undefined, ""]); //should return []. 
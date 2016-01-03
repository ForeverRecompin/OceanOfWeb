function titleCase(str) {
  str = str.toLowerCase();
  var arrStr = str.split(' ');
  var lengthOfArrStr = arrStr.length;
  for(var i = 0; i < lengthOfArrStr; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase().concat(arrStr[i].substring(1)); 
  }
  var titleCaseStr = arrStr.join(' ');
  return titleCaseStr;
}
titleCase("I'm a little tea pot");

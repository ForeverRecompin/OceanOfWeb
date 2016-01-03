function findLongestWord(str) {
  var arrStr = str.split(' ');
  var maxLength = 0;
  var lengthOfArray = arrStr.length;
  for(var i=0; i < lengthOfArray ; i++) {
    wordLength = arrStr[i].length;
    if(wordLength > maxLength) {
      maxLength = wordLength;
    }
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
function rot13(str) { // LBH QVQ VG!
  /*
  One of the simplest and most widely known ciphers is a Caesar cipher, 
  also known as a shift cipher. In a shift cipher the meanings of the 
  letters are shifted by some set amount.

  A common modern use is the ROT13 cipher, where the values of the
  letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and 
  so on.

  Write a function which takes a ROT13 encoded string as input and 
  returns a decoded string.
  */
  str = str.toUpperCase();
  arr = str.split('');
  var lenOfArr = arr.length;
  for (var i = 0; i < lenOfArr; i++) {
    var asciiCode = String.charCodeAt(arr[i]);
    if (asciiCode >= 65 && asciiCode <= 90) {
      asciiCode += 13;
      asciiCode = (asciiCode > 90) ? asciiCode - 26 : asciiCode;
    }
    arr[i] = String.fromCharCode(asciiCode);
  }
  str = arr.join('');
  return str;
}
// Change the inputs below to test
//rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP".

rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.');
//should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX." 

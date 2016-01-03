function end(str, target) {
  lenOfStr = str.length; 
  lenOfTarget = target.length;
  return str.substring(lenOfStr-lenOfTarget) == target;
}

end("Bastian", "n");
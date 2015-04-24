

function removeZeros(arrayToTrim) {
  return arrayToTrim.filter(function(num) {
    return (num !== 0);
  });
}

function padArray(arrayToPad, maxLength, padding) {
  var paddedArray = arrayToPad;
  while (paddedArray.length < maxLength) {
    paddedArray.push(padding);
  }
  return paddedArray;
}
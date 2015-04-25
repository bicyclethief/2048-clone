

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

function rotate90(array) {
  var transposed = transpose(array);
  return transposed.map(function(row) {
    return row.reverse();
  });
}

function transpose(a) {
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}

// var original = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]];
// console.log(original);
// console.log(rotate90(original));
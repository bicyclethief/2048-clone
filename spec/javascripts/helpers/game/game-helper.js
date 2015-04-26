
function gameStringToArray(gameString) {
  return gameString.trim().replace(/\n/g, ' ').split(' ').map(function(elem) {return parseInt(elem, 10);});
}


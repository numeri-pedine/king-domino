var images = [];

var allTiles = [];
var drawnTiles = [];

$(document).ready(function () {
  for (var i = 1; i < 49; i++) {
    let index = i.toString().padStart(2, '0');
    images[i] = new Image();
    images[i].src = "img/T" + index + ".webp";
  }
  reset();
});

function reset() {
  clearTiles();
  generateArrays();
  drawTiles();
}

function clearTiles() {
  console.log("Calling tiles clear")
  for (var t = 0; t < 4; t++) {
    var tile = document.querySelector('.tile:nth-child(' + (t + 1) + ')')
    tile.classList.remove("empty")
  }
  return
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

function generateArrays() {
  console.log("Calling array generation")
  var N = 48;
  allTiles = [...Array(N).keys()].map(x => x + 1);
  shuffle(allTiles);
  return

}

function drawTiles() {
  console.log("Calling tiles draw")
  if (allTiles.length === 0){
    for (var t = 0; t < 4; t++) {
      var tile = document.querySelector('.tile:nth-child(' + (t + 1) + ')')
      tile.classList.add("empty")
      var img = document.querySelector('.tile:nth-child(' + (t + 1) + ')>img')
      img.src = 'img/sample.jpg'
    }
    var numberElements = document.querySelectorAll('.number');
    for (var t = 0; t < 4; t++) {
      numberElements[t].textContent = ""
    }
    return
  }
  drawnTiles = allTiles.splice(0, 4);
  drawnTiles.sort(function (a, b) {
    return a - b;
  });
  for (var t = 0; t < 4; t++) {
    var img = document.querySelector('.tile:nth-child(' + (t + 1) + ')>img')
    let index = drawnTiles[t].toString().padStart(2, '0');
    img.src = 'img/T' + index + '.webp'
  }
  var numberElements = document.querySelectorAll('.number');
  for (var t = 0; t < 4; t++) {
    numberElements[t].textContent = drawnTiles[t]
  }
  var remainingCounter = document.querySelector('#tiles-remaining');
  remainingCounter.textContent = allTiles.length
}

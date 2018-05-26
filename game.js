
var gameHeight = 600;

var gridSize = 64;
var laneWidth = gridSize / 3;

var gameWidth = gridSize * 9 + laneWidth;
var player;
var road;


function setup(){
  createCanvas(gameWidth, gameHeight)
  player = new Player();
  road = new Road();
}

function update(){
  player.update();
  road.update();
}


function draw(){
  background(51);
  scene();

  road.draw();
  player.draw();


  update();
}


function scene(){
  var grassSize = gridSize * 2;
  fill(0, 255, 0);
  rect(0, 0, grassSize, gameHeight);
  rect(gameWidth - (gridSize * 4 - laneWidth), 0, gameWidth, gameHeight);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}

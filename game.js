

var gridSize = 64;
var laneWidth = gridSize / 3;

var gameWidth = gridSize * 9 + laneWidth;
var gameHeight = gridSize * 8;

var player;
var roadController;


function setup(){
  createCanvas(gameWidth, gameHeight)
  player = new Player();
  roadController = new RoadController();
  // noLoop();
}

function update(){
  player.update();
  roadController.update();
}


function draw(){
  background(51);
  scene();

  roadController.draw();
  player.draw();


  update();
}


function scene(){
  var grassSize = gridSize * 2;
  fill(0, 255, 0);
  rect(0, 0, grassSize - 5, gameHeight);
  rect(gameWidth - (gridSize * 4 - laneWidth) + 5, 0, gameWidth, gameHeight);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}

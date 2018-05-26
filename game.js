var gameWidth = 600;
var gameHeight = 600;

var gridSize = 64;
var laneWidth = 64;

var player;

function setup(){
  createCanvas(gameWidth, gameHeight)
  player = new Player();
}

function update(){
  player.update();
}


function draw(){
  background(51);

  player.draw();


  update();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}

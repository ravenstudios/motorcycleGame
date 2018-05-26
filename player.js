function Player(){
  var size = 64;
  var x = gridSize * 3 + laneWidth;
  var y = gameHeight - size * 2;

  var pos = 2; // 123

  this.update = function(){

  }

  this. draw = function(){
    fill(255);
    rect(x, y, size, size);
  }

  this.moveLeft = function(){
    if(pos > 1){
      x -= gridSize + laneWidth;
      pos--;
    }

  }

  this.moveRight = function(){
    if(pos < 3){
      x += gridSize + laneWidth;
      pos++;
    }
  }

  this.getCoords = function(){
    return {
      x: x,
      y: y,
      size: size,
      pos: pos
    };
  }
}

function Road(){
  var x = gridSize * 3;
  var y = 100;
  var width = laneWidth;
  var height = 64;
  var speed = 5;
  var offset = gridSize * 3;
  this.update = function(){
    y += speed;

    if(y > gameWidth){
      y = 0 - height;
    }
  }

  this.draw = function(){
    fill(255, 255, 0);
    rect(x, y, width, height);
    rect(x + gridSize + laneWidth, y, width, height);

    
  }
}

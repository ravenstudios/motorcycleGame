function Road(offset){
  var x = gridSize * 3;
  var y = offset;
  var width = laneWidth;
  var height = 64;
  var speed = 5;
  this.update = function(){
    y += speed;

    if(y > gameWidth){
      y = 0 - height;
    }
  }

  this.draw = function(){
    fill(255, 255, 0);
    rect(x + 5, y, width - 10, height);//left
    rect(x + gridSize + laneWidth + 5, y, width - 10, height);//right




  }
}

function RoadController(){
  var roadMarkers = [];

  roadMarkers.push(new Road(gridSize * 0));
  roadMarkers.push(new Road(gridSize * 2));
  roadMarkers.push(new Road(gridSize * 4));
  roadMarkers.push(new Road(gridSize * 6));
  roadMarkers.push(new Road(gridSize * 8));



  this.update = function(){
    for (var i = 0; i < roadMarkers.length; i++) {
      roadMarkers[i].update();

    }
  }

  this.draw = function(){
    for (var i = 0; i < roadMarkers.length; i++) {
      roadMarkers[i].draw();
    }
  }

}

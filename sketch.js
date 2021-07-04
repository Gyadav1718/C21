
var fixedRect, movingRect;
var wall1, wall2,car;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  car = createSprite(200,200,50,50);
  car.shapeColor = "red";
  car.velocityX = 3
  wall1 = createSprite(50,200,20,100);
  wall1.shapeColor = "grey";
  wall2 = createSprite(650,200,20,100);
  wall2.shapeColor = "grey";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

if (bounceOff(wall2,car)){
  car.shapeColor = "pink";
  car.velocityX = -car.velocityX;
}
if (bounceOff(wall1,car)){
  car.shapeColor = "orange";
  car.velocityX = -car.velocityX;
}
  drawSprites();
}


var fixedRect,movingRect, fr;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fr=createSprite (200,300,50,20);
 fr.shapeColor="purple"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,fixedRect) ){
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
else if(isTouching(movingRect,fr)){
  movingRect.shapeColor="red"
  fr.shapeColor="red"
fr.velocityX=2;
} 
else {
movingRect.shapeColor="green"
fixedRect.shapeColor="green"
fr.shapeColor="purple"
}

  drawSprites();
}

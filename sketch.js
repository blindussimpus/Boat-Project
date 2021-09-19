var shipAnimation;
var ship;
var sea, seaImage;

function preload(){
shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png");
seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(600,600);

  sea = createSprite(300,300);
  sea.addImage(seaImage);
  sea.scale = 0.4;
  sea.velocityX = -3;

  ship = createSprite(250,400,10,10);
  ship.addAnimation("moving", shipAnimation);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  if (sea.x < 0){
    sea.x = 300;
  }
  drawSprites();
 
}
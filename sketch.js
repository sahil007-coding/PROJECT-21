var wall, thickness, damage;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400, 200, 9, 3);
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

}
hasCollided();
function draw() {
  background(255,255,255);  
  thickness=random(22,83);

  speed=random(223,321);
  weight=random(30,52);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }

  }

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

  
}
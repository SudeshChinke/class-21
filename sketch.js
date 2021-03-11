
var c,d;

function setup() {
  createCanvas(800,400);

 c=createSprite(100,200,40,40);
 c.shapeColor="black";

 d=createSprite(550,200,20,20);
 d.shapeColor="blue";

 c.velocityX=3;
 d.velocityX=-4

}

function draw() {
  background(255,255,255); 

  /*b.x=World.mouseX;
  b.y=World.mouseY;*/


  if(isTouching(c,d)){

  c.shapeColor="red";
  d.shapeColor="red";

  }else {

  c.shapeColor="black";
  d.shapeColor="blue";

  }

  bounceOff(c,d);

  console.log(c.y-d.y);
  drawSprites();
}

function isTouching(object1,object2){

  if(object2.x-object1.x < object1.width/2 + object2.width/2 && object1.x-object2.x < object1.width/2 + object2.width/2 && object2.y-object1.y < object1.height/2 + object2.height/2 && object1.y-object2.y < object1.height/2 + object2.height/2){

    return true;
  
   }else {

    return false;

   }
}
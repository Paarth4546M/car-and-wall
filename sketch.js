const World = Matter.World;
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var myengine,myworld;

var car,wall; 
var speed,weight;


function setup() {
  createCanvas(1600,400);
  myengine = Engine.create();
    myworld = myengine.world;
  
  speed = random(55,90);
  weight = random(400,1600);

car  = createSprite(50,200,50,50);
World.add(myworld,car)
car.velocityX = speed;
car.shapeColour = ("white")
var wall_options = {
isStatic:true
}
wall = createSprite(1500,200,60,height/2,wall_options);
World.add(myworld,wall)

}

function draw() {
  background(0);  
  Engine.update(myengine);

  rectMode(CENTER)
  rect(car.position.x,car.position.y,50,50)

  rectMode(CENTER)
  rect(wall.position.x,wall.position.y,60,height/2)

if(wall.x - car < car.width/2 + wall.width/2){

 var deformation = 0.5*weight*speed*speed/22500
 car.position.x  = 200;
 car.position.y = 200;
}
}
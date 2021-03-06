const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
 var ground , ball;


function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world;

var ball_option = {
  restitution:0.2 , 
  density:1.0 ,

}

ball = Bodies.circle(200,100,20,ball_option);
World.add(world,ball);
console.log(ball);

var ground_option = {
isStatic:true
}
ground = Bodies.rectangle(400,390,800,10,ground_option)
World.add(world,ground)
}


function draw() {
  background(0);  
  Engine.update(engine);
ellipseMode(RADIUS)
 ellipse(ball.position.x , ball.position.y , 20 ,20);
 rectMode(CENTER)
rect(ground.position.x , ground.position.y , 800,10)

}
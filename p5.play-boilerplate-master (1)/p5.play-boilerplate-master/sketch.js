const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var world, engine;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var groundOption={
  isStatic : true
}

  ground=Bodies.rectangle(200,300,100,50,groundOption);
  World.add(world,ground);

  var ballOption={
    restitution:1.0
  }
ball=Bodies.circle(200,10,100, ballOption);
World.add(world,ball);

  console.log(ground);

}

function draw() {
  background(15,100,20); 
  Engine.update(engine);
  fill("red");
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,10); 

  fill("yellow");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);





}
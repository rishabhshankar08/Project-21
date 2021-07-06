
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, groundObj, leftSide, rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2,700,width,20,);
	leftSide = new Ground(1100,600,100,20);
	rightSide = new Ground(1170,600,120,20);
var ball_options ={
	isStatic : false,
	restitution : 0.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(500,600,20,20);
World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP){
	Matter.Body.applyForce(ball,{x : 0,y : 0},{});
	
}
}




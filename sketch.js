
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     paper = new Paper(200,200,2,2,true);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 // rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;

var dustbinObject;

var groundObject;

var world;

function preload(){

   dustbinObject = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400, 500, 50, 50);

	dustbinObject = new dustbin(1200, 570, 50, 100);

	groundObject = new ground(width/2, 680,width, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  groundObject.display();

  dustbinObject.display();

  paper.display();

}

function keyPressed(){

	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:250, y:-250});
   }

}

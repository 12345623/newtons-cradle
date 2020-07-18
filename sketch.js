var bob,string,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(400,100,700,50)
	//bob=Bodies.circle(200,100,20);
	//World.add(world,bob);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //ellipse(bob.body.position.x,bob.body.position.y,20);
  ground.display();
  
  drawSprites();
 
}




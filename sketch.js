
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,550,800,20)
	ground1=new Ground(530,465,10,150)
	ground2=new Ground(750,465,10,150)
	ground3=new Ground(640,535,230,10)

	paperball=new Paperball(100,500,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  

  ground.display()
  ground1.display()
  ground2.display()
  ground3.display()
  paperball.display()

  drawSprites();
 
}




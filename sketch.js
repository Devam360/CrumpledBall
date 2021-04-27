
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binbase, binside1, binside2, groundS, paperS

function preload()
{
}
function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	groundS = new Ground(width/2, 580, 1200, 60)
	binbase = new Bin(width/2+200, 540, 200, 20)
	binside1 = new Bin(width/2+100, 500, 20, 100)
	binside2 = new Bin(width/2+300, 500, 20, 100)
	paperS = new Paper(100, 550, 75)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundS.display();
 binbase.display();
 binside1.display();
 binside2.display();
 paperS.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperS.body, paperS.position,{x:250, y:-250})
	}
}


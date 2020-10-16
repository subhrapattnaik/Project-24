
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//groundObject = new Ground(400,390,800,20);
	//paperObject = new Paper(100,100,40);
	//dustbinObj = new Dustbin(570,340);
	dustbinObj=new Dustbin(600,300);
	paperObject=new Paper(200,200,40);
	groundObject=new Ground(width/2,390,width,20);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
   rectMode(CENTER);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-60});
    
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;

var tree, stone;
var ground, boy;
var mango1, mango2, mango3, mango4, mango5, mango6;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(160,500,20);

	mango1 = new Mango(1300,300,25);
	mango2 = new Mango(1400,250,25);
	mango3 = new Mango(1300,200,25);
	mango4 = new Mango(1390,300,25);
	mango5 = new Mango(1270,250,25);
	mango6 = new Mango(1200,300,25);

	tree = new Tree(1300,690);

	ground = new Ground(1500,690,3000,20);

	boy = new Boy(250,590);

	chain = new Chain(stone.body,{x:160, y:500});
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  fill("darkgray");
  textSize(25);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 100, 100);

  keyPressed();

  drawSprites();
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display(); 
  mango5.display();
  mango6.display();
  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160, y:500});

		chain.attach(stone.body);
		
	}
}

function detectCollision(Astone,Amango){
	stoneBodyPosition = Astone.body.position;
	mangoBodyPosition = Amango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= Amango.r + Astone.r){
		Matter.Body.setStatic(Amango.body, false);
	}
}


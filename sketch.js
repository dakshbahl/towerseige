const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.render
const Constraint = Matter.Constraint;
var engine, world



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(400,height,800,20);
  ground2 = new Ground(500,200,250,15)  
  box1 = new Box(400, 190, 40, 40)
  box2 = new Box(450, 190, 40, 40)
  box3 = new Box(500, 190, 40, 40)
  box4 = new Box(550, 190, 40, 40)
  box5 = new Box(600, 190, 40, 40)
  box6 = new Box(425, 100, 40, 40)
  box7 = new Box(475, 100, 40, 40)
  box8 = new Box(525, 100, 40, 40)
  box9 = new Box(575, 100, 40, 40)
  box10 = new Box(450, 70, 40, 40)
  box11 = new Box(500, 70, 40, 40)
  box12 = new Box(550, 70, 40, 40)
  box13 = new Box(500, 40, 40, 40)
  player = new Player(100, 300, 20, 20)

  slingshot = new SlingShot(player.body, {x:200, y:200})

}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine)
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  player.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY} )
  
  
  }
  
  function mouseReleased()  {
  
  slingshot.fly()
  
  }
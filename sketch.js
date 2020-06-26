const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
 
   ground1 = new Ground(400,200,200,20)
   ground2= new Ground(400,400,800,40)
   box1 = new Box(400,160,20,20)
  box2 = new Box(420,160,20,20)
  box3 = new Box(440,160,20,20)
  box4= new Box(380,160,20,20)
  box5 = new Box(360,160,20,20)
  box6=new Box(380,140,20,20)
  box7= new Box(400,140,20,20)
  box8= new Box(420,140,20,20)
  box9 = new Box(400,140,20,20)

polygon=new Pologon(50,200,40,6);
  slingShot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
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
  polygon.display();
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});  
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
  if (keyCode==32)
{
    slingShot.attach(polygon.body)
}}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;
var drone1;
var missile1, bullet1;


function preload() {}
function setup() {
  var canvas = createCanvas(displayWidth/ 4 , displayHeight - 100);
  engine = Engine.create();
  world = engine.world;

  drone1 = new Drone(400,100,50,50);
  //Engine.run(engine);
}

function draw() {
  background(255,255,0);  
  Engine.update(engine);
//  drone1.loadImage(drone1Img)
  drone1.display();
}
function moving() {
  if(keyIsDown(37)){
    drone1.x -= 10
  }
  if(keyIsDown(39)){
    drone1 += 10
  }
}
function shooting(){
  if (frameCount % 60 == 0){
    bullet1 = new Bullet(randomNumber(0,displayWidth), 0)
  }
  bullet1.y += 5
  bullet1.display
}
function launching(){
  if (frameCount % 300 == 0){
    missile1 = new Missile(randomNumber(0,displayWidth), 0)
  }
}
function randomNumber(min, max){
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}
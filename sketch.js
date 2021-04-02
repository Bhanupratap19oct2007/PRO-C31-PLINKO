const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);

  ground = new Ground(480,780,480,20);
}

var particles = [];
var Plinko = [];
var division = [];

var divisionHeight = 300;

for(var k = 0; k <= width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j <= width; j = j + 50) {
  plinkos.push(new Plinko(j, 75));
}
for(var j = 40; j <= width - 10; j = j + 50) {
  plinkos.push(new Plinko(j, 175));
}
for(var j = 40; j <= width - 20; j = j + 50) {
  plinkos.push(new Plinko(j, 275));
}
for(var j = 40; j <= width - 30; j = j + 50) {
  plinkos.push(new Plinko(j, 375));
}

if(frameCount % 60 ===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

function draw() {
  background(255,255,255);
  
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();

}
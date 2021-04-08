
//the variables declared from Matter.js ....

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  //the variables of my game...

//the required arrays of my game...
  var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;

//the setup function to create the canvas and add the default functions...

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//the function to add the the divisions using suitable parameters...

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//the functions to add  plinko from the plinkos array...

    for (var j = 75; j <=width; j=j+50) {
    
     plinkos.push(new Plinko(j,75));

    }

    for (var m = 60; m <=width-10; m=j+50) {
    
      plinkos.push(new Plinko(m,175));

    }

     for (var j = 75; j <=width; j=j+50) {
    
 plinkos.push(new Plinko(j,275)); 

      }
    
     for (var l = 55; l <=width-10; l=l+50)  {
   
       plinkos.push(new Plinko(l,375));

    }

    for (var k = 48; k <=width-10; k=k+50)  {
   
      plinkos.push(new Plinko(k,375));

   }

}
 


function draw() {
  background("torquoise");
  textSize(20);
 
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
//Creating Constant Bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Creating engine and world
var engine,world;

//Creating variables
var drops,umbrella,thunder;

var rain = [];



//Creating Setup
function setup(){

    var canvas = createCanvas(1000,1000);

    engine = Engine.create();
    world = engine.world;

   if(frameCount%10==0){

    for(var i = 0;i<200;i++){
    rain.push(new Drops(random(0,1000),random(0,1000)));
    
    }
   }

    umbrella = new Umbrella(500,500);

    if(frameCount%100==0){
        thunder = new Thunder(400,-80);
        }
    
    
}

//Displaying Sprites
function draw(){
    
    background(60)

     Engine.update(engine)

     for(var i = 0;i<200;i++){
       
        rain[i].display();

        rain[i].update();
        
        }

       
     
     umbrella.display();
     if(frameCount%100==0){
        thunder.display();
        }

     drawSprites();

     console.log(frameCount)
}   


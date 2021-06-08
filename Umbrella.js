class Umbrella{

    constructor(x,y){

        var option ={

            isStatic: true
        }
        this.r = 210;
        this.image = loadAnimation("images/walking_8.png","images/walking_7.png","images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png","images/walking_2.png","images/walking_1.png");
        this.body = Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
        this.body2 = Bodies.circle(x-30,y+100,this.r);
    }

    display(){

        var pos = this.body.position;
        

        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(60)
         ellipseMode(RADIUS)
         ellipse(0,0,this.r,this.r)
         pop();

         var posb = this.body2.position;

         push();
         translate(posb.x,posb.y);
         noStroke();
 
          //  imageMode(CENTER)
          animation(this.image,0,0,this.r,this.r)
          pop();
         
     } 
     }

     
class Thunder{

    constructor(x,y){
        this.w = 50;
        this.h = 100;
        this.image = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
        this.body = Bodies.rectangle(x,y,this.w,this.h);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        noStroke();
        animation(this.image,0,0,this.w,this.h)
        pop();
        
    }
}
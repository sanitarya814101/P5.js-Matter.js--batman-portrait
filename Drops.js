class Drops{

    constructor(x,y){
        var option = {

            'restitution':0.2,
        'friction':0.001,
        'density':1.0
        }

        this.color = "cyan";
        this.r = 5;
        this.body = Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r)
        
    }

    update(){

        if(this.body.position.y>1000){
        Matter.Body.setPosition(this.body,{x: random(0,1000),y: 0})
    }
}
}
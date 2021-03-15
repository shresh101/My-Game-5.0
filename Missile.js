class Missile{
    constructor(x,y){
        var options = {
            'restitution':1.0,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 20
        this.height = 10
        World.add(world, this.body);
    }
    display(){
        push();
        var speed = Math.random() * 10
        this.y += speed
        pop();
    }
}
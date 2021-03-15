class Bullet{
    consructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = bodies.rectangle
        this.width = 2
        this.height = 5
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.posistion
        fill(255,0,0)
    }
}
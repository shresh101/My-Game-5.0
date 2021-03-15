class Drone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x
      this.y = y
      this.image = loadImage("sprites/droneImage.jpg")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(0,255,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  

  

/*class Drone{
    constructor(x,y,width,height){
        var option={
            'density':1.0,
            'friction':0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        push();
        fill(255)
        rect(0,0,this,width,this.height)    
        pop();
    }
}*/
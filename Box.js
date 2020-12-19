class Box {
  constructor(x, y, width, height,fill) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.fill=fill
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    console.log(this.body.speed)
    
    if(this.body.speed <6){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.fill)
        rect(0, 0, this.width, this.height);
        pop();
     }else{
      World.remove(world, this.body);
      fill(this.fill)
     }
  }
};

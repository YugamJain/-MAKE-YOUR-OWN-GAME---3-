class Log{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.1,
        'friction':0.5,
        'density':2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/wood2.png");
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
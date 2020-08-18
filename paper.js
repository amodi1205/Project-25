class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
   }
    this.body = Bodies.circle(x, y, radius, options)
    this.radius = radius;
    this.paperImg = loadImage('paper.png')

    World.add(world, this.body);
 }
 display(){
    var angle = this.body.angle
    var pos =this.body.position;
     push();
    fill(255);
    translate(pos.x, pos.y);
    ellipseMode(RADIUS)
    rotate(angle)
    imageMode(CENTER)
    image(this.paperImg, 0, 0, this.radius, this.radius);
    //ellipse(0, 0, this.radius);
    pop();
 }
 
}
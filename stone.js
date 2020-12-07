class Stone{
    constructor(x, y, r) {
     var stone_options = {
        isStatic:false,
        friction:1,
        density:1.2,
        restitution:0
     } 
     this.x = x;
     this.y = y;
     this.r = r;

     this.image = loadImage("stone.png");

     this.body = Bodies.circle(this.x, this.y, this.r/2, stone_options);
     World.add(world, this.body);
    }

    display(){
        var stPos = this.body.position;

        push();
        translate(stPos.x, stPos.y);
        fill("blue");
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();    
    }
}
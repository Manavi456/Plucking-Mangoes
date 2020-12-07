class Mango{
    constructor(x, y, r){
        var mango_options = {
            isStatic: true, 
            restitution: 0.5, 
            friction: 0.3,
            density: 1.0
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("mango.png");

        this.body = Bodies.circle(this.x, this.y, this.r, mango_options);
        World.add(world, this.body);
    }

    display(){
        var mangoPos = this.body.position;
        push();
        translate(mangoPos.x, mangoPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }

}

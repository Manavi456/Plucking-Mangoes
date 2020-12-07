class Boy{
    constructor(x,y){
        var boy_options = {
            friction : 1,
            density : 1.5,
            isStatic : true
        }

        this.width = 300;
        this.height = 400;
        this.image = loadImage("boy.png");
        this.body = Bodies.rectangle(x, y, 50, 50, boy_options);
        World.add(world, this.body);
    }

    display(){
        var boyPos = this.body.position;
        push();
        translate(boyPos.x, boyPos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}
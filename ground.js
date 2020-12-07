class Ground{
    constructor(x, y, width, height){
        var gr_options = {isStatic : true};

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, gr_options);
        World.add(world, this.body);
    }

    display() {
        var grPos = this.body.position;
        
        fill("brown");
        rectMode(CENTER);
        rect(grPos.x, grPos.y, this.width, this.height);
    }

}
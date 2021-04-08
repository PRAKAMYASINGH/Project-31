class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        
        //creation of the main rectangular body...

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

//adding the created body to the world...

        World.add(world, this.body);
    }

//the display function to be mentioned in sketch.js ...

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("orange");
        rect(pos.x, pos.y, this.w, this.h);
    }
};
class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;

//creation of the main circular body of my game...

        this.body = Bodies.circle(x, y, this.r, options);
        
//adding the created body to the world...

        World.add(world, this.body);
    }

//the display function so that it will get displayed accordingly in sketch.js ...

    display() {

//the abbreviation variables for the main positions of the class's bodies...

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}
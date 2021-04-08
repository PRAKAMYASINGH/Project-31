class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        //creation of the circular body for the class...

        this.body = Bodies.circle(x, y, this.r,options); 

        //setting random colors for the main bodies of this class...

        this.color=color(random(0, 255), random(0, 255), random(0, 255));

        //adding the created body to the world...

        World.add(world, this.body);

    }

//creation of the display function to be later mentioned in sketch.js ... 

    display() {

//the abbreviation variables for the position of the created body from the calss...

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();

        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

}
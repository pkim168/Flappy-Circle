function Bird(){
    this.x = width/6;
    this.y = height/2;
    this.speed = 0;
    this.gravity = .3;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 30, 30);
    }

    this.update = function() {
        this.speed += this.gravity;
        this.y += this.speed;


        this.y = constrain(this.y, 15, height-15);
        this.speed = constrain(this.speed, -7, 100);
        if(this.y == 15 || this.y == height-15){
            this.speed = 0;
        }
    }

    this.death = function() {
        this.x = width/6;
        this.y = height/2;
        this.speed = 0;
        w.reset();
        w.pickLocation();
    }

    this.jump = function() {
        this.speed = -7;
    }
}

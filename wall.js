function Wall(){
    this.y1 = 0;
    this.y2 = 0;
    this.x = width;
    this.speed = 2;
    //only 1 wall at a time
    //when the wall hits the left side, it moves to the right side, changes position, and gains speed
    //width = 60 or 90
    //space between = 100

    this.pickLocation = function() {
        this.y1 = floor(random((height-150)/scl))*scl;
        this.y1 = constrain(this.y1, 0, height-150);
        this.y2 = this.y1 + 150;
        this.x = width;
    }

    this.speedUp = function() {
        this.speed += .2;
        this.speed = constrain(this.speed, 2, 15);
    }

    this.reset = function() {
        this.speed = 2;
    }

    this.update = function(){
        this.x -= this.speed;
    }

    this.show = function() {
        fill(255);
        rect(this.x, 0, 60, this.y1);
        rect(this.x, this.y2, 60, height-this.y2);
    }

}

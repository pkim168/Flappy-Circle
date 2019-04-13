var b;
var w;
var scl = 30;
var score = 0;
var bool = 0;

function setup(){
    createCanvas(600, 570);
    b = new Bird();
    w = new Wall();
    w.pickLocation();
}

function draw(){
    background(0);

    noStroke();
    fill(255);
    textSize(80);
    textAlign(CENTER, CENTER);
    text(score, width/2, height/8);
    b.update();
    b.show();
    w.update();
    w.show();


    if(w.x <= 0 && bool == 0){
        score++;
        w.speedUp();
        bool = 1;
    }

    if(w.x <= -60){
        w.pickLocation();
        w.show();
        bool = 0;
    }

    var xDist = b.x - w.x;
    var yDist1 = b.y - w.y1;
    var yDist2 = b.y - w.y2;
    if(b.y == height - 15 || (xDist < 75 && xDist > -15 && yDist1 < 15) || (xDist < 75 && xDist > -15 && yDist2 > -15) ){
        b.death();
        score=0;
    }
}

function keyPressed() {
    if(key == ' ') {
        b.jump();
    }
}

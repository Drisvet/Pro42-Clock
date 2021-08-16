var hours,minutes,seconds;

hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  scAngle = msp(sc, 0, 60, 0, 360);

  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop(); 

}

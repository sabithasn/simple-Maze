let bgcolor;

function setup() {
  createCanvas(500, 500);
  bgcolor = (random(100, 200));
  frameRate(10);
}

function draw() {
  background(bgcolor);
  let x = mouseX;
  let y = mouseY;
  console.log(x, y);

  noStroke();
  fill(255, 255, 255);
  rect(50, 50, 400, 400);
  noFill();

  stroke(10);
  strokeWeight(6);
  line(50, 50, 190, 50);
  line(190, 50, 190, 130);
  line(90, 90, 150, 90);
  line(150, 90, 150, 170);
  line(50, 50, 50, 130);
  line(50, 130, 110, 130);
  line(83, 130, 83, 170);
  line(120, 170, 230, 170);
  line(230, 50, 230, 80);
  line(230, 120, 230, 250);
  line(270, 50, 270, 170);
  line(50, 210, 190, 210);
  line(270, 250, 160, 250);
  line(120, 210, 120, 290);
  line(160, 330, 80, 330);
  line(80, 330, 80, 250);
  line(160, 330, 160, 290);
  line(160, 290, 230, 290);
  line(270, 250, 270, 330);
  line(270, 330, 200, 330);
  line(200, 410, 200, 290);
  line(50, 130, 50, 450);
  line(50, 370, 100, 370);
  line(140, 370, 200, 370);
  line(160, 410, 80, 410);
  line(80, 410, 80, 450);
  line(200, 410, 240, 410);
  line(270, 290, 350, 290);
  line(350, 290, 350, 210);
  line(350, 210, 270, 210);
  line(310, 210, 310, 250);
  line(270, 170, 310, 170);
  line(240, 370, 310, 370);
  line(275, 370, 275, 450);
  line(310, 370, 310, 330);
  line(350, 330, 415, 330);
  line(350, 330, 350, 370);
  line(310, 410, 310, 450);
  line(310, 410, 350, 410);
  line(390, 410, 390, 370);
  line(390, 370, 450, 370);
  line(390, 410, 420, 410);
  line(390, 290, 450, 290);
  line(350, 170, 385, 170);
  line(350, 210, 420, 210);
  line(390, 250, 390, 330);
  line(420, 210, 420, 250);
  line(385, 210, 385, 90);
  line(420, 170, 450, 170);
  line(310, 90, 310, 130);
  line(350, 90, 350, 50);
  line(310, 130, 385, 130);
  line(385, 90, 420, 90);
  line(420, 130, 420, 170);
  line(230, 50, 450, 50);
  line(450, 50, 450, 290);
  line(450, 330, 450, 450);
  line(50, 450, 450, 450);
  noStroke();

  let a = random(255);
  let b = random(255);
  let c = random(255);

  noStroke();
  fill(a, b, c);
  triangle(210, 35, 195, 20, 225, 20);
  triangle(480, 310, 465, 295, 465, 325);
  noFill();

  if (mouseIsPressed) {
    fill(255, 150, 0);
  } else {
    fill(80, 80, 200);
  }
  ellipse(mouseX, mouseY, 20, 20);

  if (mouseX > 440 && mouseX < 460 && mouseY > 300 && mouseY < 320) {
    noLoop();
  }
}

//function mousePressed() {
//noLoop();
//}
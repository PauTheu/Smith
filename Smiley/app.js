

let d = 200;

function setup() {
   createCanvas(400, 400);
}

let y1;
let y2;
let value = 0;
let x1;
let x2;

//let pX = Math.abs(aX) + 1;

function draw() {
 
  background(220);
  strokeWeight(5);
  fill(255, 255, 255);
  text("X: "+rotationX, 20, height/4);
  text("Y: "+rotationY, 20, height/2);
  fill(255 - value, 255, 0);
  
  strokeWeight(3);
  ellipse(width/2, height/2, d);
  fill(255);
  let aX = accelerationX;
  line(145, 140, 175, y1)
  line(225, y1, 255, 140)
  ellipse(160, 170, 36);
  ellipse(240, 170, 36)
  fill(0);
  ellipse(x1, 170, 7)
  ellipse(x2, 170, 7)
  fill(255);


  triangle(width/2, (height/2) - 10, 180, 220, 220, 220);

  noFill();
  beginShape();
  curveVertex(150,y2)
  curveVertex(150,y2)
  curveVertex(180,250)
  curveVertex(220, 250)
  curveVertex(250, y2)
  curveVertex(250,y2)
  endShape();
  
  if (deviceOrientation === "landscape") {
  
  x1 = map(rotationX, -90, 90, 160, 178);
  x2 = map(rotationX, -90, 90, 240, 258);
  y1 = map(rotationY, -90, 90, 130, 160);
  y2 = map(rotationY, -90, 90, 230, 270);
    
  }
  
  else {
    
  x1 = map(rotationY, 0, 90, 160, 178)
  x2 = map(rotationY, 0, 90, 240, 258)
  y1 = map(rotationX, 0, 90, 130, 160);
  y2 = map(rotationX, 0, 90, 230, 270);
  }
  

}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
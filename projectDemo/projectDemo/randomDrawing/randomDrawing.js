function setup(){
    
    createCanvas(windowWidth,windowHeight);
    //background(204);
    background(255);
    stroke(0, 15); 
    noFill(); 
    t = 0;
    angleMode(DEGREES);

}

function draw(){

  frameRate(30);

  let cutDown=map(frameCount,0,450,15,0);

  if(frameCount <= 450){
   
    strokeWeight(1);
    rect(70,90,150,10);
    stroke(0,75);
  
    rect(70,90,10*cutDown,10);
 
    strokeWeight(1);
    noFill();

  if (mouseIsPressed == true) {
    stroke(0, 45); 
    line(mouseX, mouseY, pmouseX, pmouseY); 
    ellipse(mouseX, mouseY, 2, 2); 
  } else{

    stroke(0, 15); 

    lines();
    tShapes();
    }
     
  }

}

function mouseClicked(){
  if (frameCount > 450){
    background(255);
    frameCount=0;
  }
}

function lines(){
  var x1 = width * noise(t + 35); 
  var x2 = width * noise(t + 45); 
  var x3 = width * noise(t + 55); 
  var x4 = width * noise(t + 65); 
  var y1 = height * noise(t + 75); 
  var y2 = height * noise(t + 85); 
  var y3 = height * noise(t + 95); 
  var y4 = height * noise(t + 105);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    t += 0.005;

}

function tShapes(){

  translate(width/2, height/2); 
    beginShape(); 
    for (var i = 0; i < 300; i++) {
      var ang = map(i, 0, 300, 0, 360);
      var rad = 300 * noise(i * 0.01, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
    curveVertex(x, y); 
  } 
  endShape(CLOSE);
  t += 1;

}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 
    background(255);
    stroke(0, 15); 
    noFill(); 
    t = 0;
    angleMode(DEGREES);
    
 }
 



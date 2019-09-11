var originalImage, thresholdImage, invertImage;
 
function preload()
{
  // load original image
  originalImage = loadImage("img/monalisa.jpg");
  
  // load in a few more copies (yes, I know that I could also use clone())
  thresholdImage = loadImage("img/monalisa.jpg");
  grayImage = loadImage("img/monalisa.jpg"); 
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);

}

function draw() 
{
  background(255);
  strokeWeight(5);
  fill(0);
  textSize(57);
  
  textStyle(BOLD);
  textAlign(CENTER);
  text('PROJECT WEBPAGE DEMO',windowWidth/2,windowHeight/2-130);
  
  // add filters to images
  thresholdImage.filter("threshold", 0.5);
  grayImage.filter("gray"); 
  
   // display images
var ar=300/400,
    dw=windowWidth/3,
    dh=windowWidth/3*ar;
    image(originalImage, 0, windowHeight/2-dh/8,dw,dh,0,0,400,300); 
    image(thresholdImage, dw, windowHeight/2-dh/8,dw,dh,0,0,400,300);
    image(grayImage, dw*2, windowHeight/2-dh/8,dw,dh,0,0,400,300);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(255);

}
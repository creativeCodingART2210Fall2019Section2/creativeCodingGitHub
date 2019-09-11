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

}

function draw() 
{
  background(255);
  
  // add filters to images
  thresholdImage.filter("threshold", 0.5);
  grayImage.filter("gray"); 
  
   // display images
var ar=300/400,
    dw=windowWidth/3,
    dh=windowWidth/3*ar;
    image(originalImage, 0, windowHeight/2-dh/4,dw,dh,0,0,400,300); 
    image(thresholdImage, dw, windowHeight/2-dh/4,dw,dh,0,0,400,300);
    image(grayImage, dw*2, windowHeight/2-dh/4,dw,dh,0,0,400,300);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);

}
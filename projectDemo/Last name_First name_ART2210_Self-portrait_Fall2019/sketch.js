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
  image(originalImage, 0, 0); 
  image(thresholdImage, 200, 0);  
  image(grayImage, 400, 0);
  
  // display text labels
  fill(255);
  noStroke();
  text('Original', 25, height - 25);
  text('Threshhold', 225, height - 25);
  text('Greyscale', 425, height - 25);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);

}
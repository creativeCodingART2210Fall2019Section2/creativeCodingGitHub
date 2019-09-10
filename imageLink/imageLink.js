

var img;

function preload(){
    img=loadImage("img/pikapikapika.jpg");
    
}

function setup(){
    

    createCanvas(windowWidth,windowHeight);
  
    

}


function draw(){
  image(img, windowWidth/2, windowHeight/2);
  

}


function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 

    

}

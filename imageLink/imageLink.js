

var img;

function preload(){
    img=loadImage("img/pikapikapika.jpg");
    
}

function setup(){
    

    createCanvas(windowWidth,windowHeight);
  
    

}


function draw(){
  image(img,windowWidth/2-345,windowHeight/2-194);
  

}


function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 

    

}

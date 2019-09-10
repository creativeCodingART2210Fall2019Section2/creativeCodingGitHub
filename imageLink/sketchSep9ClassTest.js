

var img;

function preload(){
    img=loadImage("img/pikapikapika.jpg");
    
}

function setup(){
    

    createCanvas(windowWidth,windowHeight);
    //background(204);

    

}



function draw(){
  image(img, 0, 0);
  
  ellipse(windowWidth/2,windowHeight/2,100,200);




    //image(img, windowWidth/2-345, 0);    
    //image(img,0, 0, 200, 100, 0, 0, 600, 300);
     
        //ellipse(windowWidth/2,windowHeight/2,var1.y,90);
        
       // ellipse(windowWidth/2,gP.c,var1.y,var1.a);
    
 /*   
    let r = map(mouseX, 0, width, 0, 255, true);
    let g = map(mouseX, 0, width, 0, 140, true);
    let b = map(mouseY, 0, width, 0, 255, true);
    background(r,g,b);
   

   
    background(237, 34, 93);
    fill(0);
  
    if (mouseIsPressed) {
      ellipse(50, 50, 50, 50);
    } else {
      rect(25, 25, 50, 50);
    }
  
    print(mouseIsPressed);
   */  


}





function windowResized(){

    resizeCanvas(windowWidth,windowHeight); 
    //background(204);
    

}

function setup(){
    createCanvas(windowWidth,windowHeight);

}

function draw(){
    mouseChangingBackground()
}

function mouseChangingBackground(){   
    let x1 = map(mouseX, 0, width, 0, 135,true);
    let x2 = map(mouseY, 0, width, 0, 255,true);
    let x3 = map(mouseX, 0, width, 255, 0,true);
    background(x3,x2,x1);

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);

}
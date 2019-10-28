var flowers;

/*
function preload(){
  flowers = loadJSON("flower.json");

}
*/
function setup(){
  createCanvas(400,400);
  flowers={
    name: "sunflower",
    col:color(200,200,0)
  }
  
}

function draw(){
  background(0);
  fill(flowers.col);
  Text(flowers.name,10,50);
}

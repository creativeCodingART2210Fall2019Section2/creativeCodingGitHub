var flowers;

function preload(){
  flowers = loadJSON("flower.json");

}

function setup(){
  createCanvas(400,400);
  
}

function draw(){
  background(0);
  fill(flowers.r,flowers.g,flowers.b);
  Text(flowers.name,10,50);
}

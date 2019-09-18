class Rect{
  constructor(){
    this.pos   = [rand(width), rand(height)];
    this.size  = [rand(400), rand(200)];
    this.amt   = this.size[1]/200;
    this.speed = (1-this.amt)*3+1;
    this.hue   = this.amt*.3 + .5;
  }
  render(){
    fill(this.hue, 1, 1, pow(1-this.amt, 2)*.4 + .1);
    for (let d of dirs){//x-repeat
      pushpop(() => {
        translate(d[0]*width, d[1]*height);
        rect(...this.pos, ...this.size);
      })
    }
    this.pos[0] = (this.pos[0]+this.speed)%width;
  }
}

let rects    = [];
let numRects = 100;
let dirs = [
  [-1, 0], [0, 0], [1, 0] 
]

setup = () => {
  pixelDensity(1);
  createCanvas();
  colorMode(HSB, 1, 1, 1);
  rectMode(CENTER);
  blendMode(ADD);
  stroke(1, .1);
  windowResized();
}

init = () => {
  rects = [];
  for (let i = 0; i < numRects; i++) rects.push(new Rect());
}

draw = () => {
  clear();
  rects.map(r => r.render());
}

mouseClicked  = ()     => {windowResized();}
windowResized = ()     => {resizeCanvas(windowWidth, windowHeight); init();}
let v2        = (x, y) => {return createVector(x, y)}
let rand      = (x)    => {return random(x)}
let pushpop   = (f)    => {push();f();pop();}

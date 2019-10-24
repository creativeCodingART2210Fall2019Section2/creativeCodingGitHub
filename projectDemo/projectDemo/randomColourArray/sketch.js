
var c = ['#ff0000',
        '#FFFF4D',
        '#0000FF']         
var texts = ['red','yellow','blue']
const radius=100;
var x,y;
var d;
let score = 0;
let index0, index1, index2;

function setup() {
    
  createCanvas(windowWidth, windowHeight);

  background('#d3d3d3');
  x = random(width);
  y = random(70,height);
  index0=c[int(random(0, 3))];
  index1=c[int(random(0, 3))];
  index2=0;

}

function draw() {

    frameRate(30);
    let cutDown=map(frameCount,0,450,16,1);

    if(frameCount <= 450){

    background('#d3d3d3');
    fill(0);
    textSize(12);
    textAlign(LEFT);
    text("Score: " + score, 10, 20);
    text("Time: " + int(cutDown), 90, 20);
    
    fill(index1);   
    noStroke();
    ellipse(x, y, radius, radius);
    noStroke();

    fill(index0); 
    textSize(25);
    //text(texts[index2],width/2,20); 
    text(texts[index2],mouseX,mouseY); 
    
    }

    if(frameCount>450){
        background('#d3d3d3');
        fill(0);
        textSize(25);
        textAlign(CENTER);
        text("SCORE: " + score, windowWidth/2, windowHeight/2);
        fill(255);
        rect(windowWidth/2-70, windowHeight/2+30,140,40);
        fill(0);
        textSize(25);
        textAlign(CENTER);
        text("RESTART",windowWidth/2, windowHeight/2+60)

        let dRw = dist(mouseX, windowHeight/2+30, windowWidth/2-70, windowHeight/2+30);
        let dRh = dist(windowWidth/2-70, mouseY, windowWidth/2-70, windowHeight/2+30);

        if(dRw<140 && dRh<40){
            fill('#a9a9a9');
            rect(windowWidth/2-70, windowHeight/2+30,140,40);
            fill(255);
            textSize(25);
            textAlign(CENTER);
            text("RESTART",windowWidth/2, windowHeight/2+60)
        }


    }

}

function  mouseClicked(){
    let d = dist(mouseX, mouseY, x, y);
    
    if (d < radius) {
        x = random(width);
        y = random(70,height);
        if(index1=='#ff0000' && index2==0||
           index1=='#FFFF4D' && index2==1||
           index1=='#0000FF' && index2 ==2){
           score++;
        }  else{
            score--;
        }  
        
    }
       
    index2=int(random(0,3));
    index1=c[int(random(0, 3))];
    index0=c[int(random(0, 3))];

    if(frameCount>450){
        let dRw = dist(mouseX, windowHeight/2+30, windowWidth/2-70, windowHeight/2+30);
        let dRh = dist(windowWidth/2-70, mouseY, windowWidth/2-70, windowHeight/2+30);

        if(dRw<140 && dRh<40){
            frameCount=0;
            background('#d3d3d3');
            x = random(width);
            y = random(70,height);
            index0=c[int(random(0, 3))];
            index1=c[int(random(0, 3))];
            index2=0;
        }
    

    }
       
}   


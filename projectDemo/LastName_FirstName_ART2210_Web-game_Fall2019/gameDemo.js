var ballSize = 35;           
var ballX;                   
var ballY;                   
var ballColor;               
var ballSpeedVert= 0;        
var gravity= 0.4;            
var ballSpeedHorizon= 5;     
var airfriction= 0.005;      
var friction = 0.003;        
var surface;                 
var racketColor;             
var racketWidth;            
var racketHeight;            
var haddle;                  
var score = 0;               
var bestScore = 0;           
var gameScreen = 0;          

var boards = [];            
var boardSpeed = 2;          
var boardInterval = 5000;    
var lastAddTime = 0;        
var minGapWidth = 200;       
var maxGapWidth = 300;       
var boardHeight = 30;        
var boardColor;            

  

function setup() {
  
   createCanvas(700, windowHeight);        
   ballColor = color(250, 180, 80); 
   racketColor =color(180, 0, 0);   
   boardColor = color(23, 20, 11); 
   ballX=width/4;                 
   ballY=height/5;                
   smooth();                       
   racketWidth =200;              
   racketHeight=15;                
   haddle=50;                       
   frameRate(60);                          
  
}

function draw() {
  

   if (gameScreen == 0) {         
    initScreen(); 
   } else if (gameScreen == 1) {  
    gameplayScreen(); 
   }else if (gameScreen == 2) { 
  
    gameOverScreen();         
   } 
 } 

function initScreen() {             
    background(236, 240, 241);        
   textAlign(CENTER);               
   fill(52, 73, 94);                
   textSize(100);                     
   text("PING PONG", width/2, height/2); 

   fill(92,167,182);                 
   noStroke();                        
   rectMode(CENTER);                  
   rect(width/2, height-40, 200,60,5); 
   fill(236,240,241);                 
   textSize(30);                      
   text("START", width/2, height-30);   
 } 

 function gameplayScreen() {    
  
  background(236, 240, 241);   
   drawBall();                  
   drawRacket();              
   watchRacketBounce();                    
   applyGravity();              
   applyHorizontalSpeed();      
   keepInScreen();             
   printScore();                
   boardAdder();               
   boardHandler();            
 } 
  
  
   function gameOverScreen() {     
   background(236, 240, 241);    
   textAlign(CENTER);            
    
   if(bestScore<score){          
    bestScore = score;
   }
   fill(23, 50, 7);                         
   textSize(40);                            
   text("HIGHTEST SCORE", width/2, height/15);     
   textSize(40);                            
   text(bestScore, width/2, height/7);     
   fill(217, 116, 43);                     
   textSize(40);                            
   text("SCORE", width/2, height/2-150);  
  
   fill(230, 180, 80);                     
   textSize(150);                           
   text(score, width/2, height/2+50);       

   fill(92,167,182);                       
   rectMode(CENTER);                        
   noStroke();                              
   rect(width/2, height-40, 200,60,5);      
   fill(236,240,241);                       
   textSize(30);                           
   text("RESTART", width/2, height-30);    
    
 } 


 function mousePressed() {    
   
  if (gameScreen==0) {    
    startGame();          
   } 
  if (gameScreen==2) {    
    restart();           
   } 
} 



function startGame() {   
  gameScreen=1;          
  } 


function gameOver() {   
   gameScreen=2;        
 } 

 function restart() {     
   ballSpeedHorizon= 10;  
   ballSpeedVert= 0;      
   score = 0;             
   ballX=width/4;         
   ballY=height/5;        
   racketWidth =200;     
   gameScreen = 1;        
   lastAddTime = 0;       
   boards = [];         
 } 

function drawBall(){                               
      fill(ballColor);                             
      ellipse(ballX, ballY, ballSize, ballSize);   

}

function drawRacket() {            
  fill(racketColor);                 
  rectMode(CENTER);                
if (score > 30) {                
     racketWidth=80;               
  } else if (score > 5) {       
    racketWidth=120;              
  } else {                      
    racketWidth=racketWidth;     
  } 
  rect(mouseX, mouseY-haddle, racketWidth,racketHeight,5);     
}



function keepInScreen() {          
 
 if (ballY+(ballSize/2) > height) {    
    gameOver();                        
  }
  
  if (ballY-(ballSize/2) < 0) {         
    makeBounceTop(0);                   
  }
  
 if (ballX-(ballSize/2) < 0) {         
    makeBounceLeft(0);                  
  }
           
  if (ballX+(ballSize/2) > width) {     
    makeBounceRight(width);             
  }
}

function applyGravity() {          
  ballSpeedVert += gravity;       
  ballSpeedVert -= (ballSpeedVert * airfriction);   
  ballY += ballSpeedVert;          
}
function applyHorizontalSpeed() {       
  ballSpeedHorizon -= (ballSpeedHorizon * airfriction); 
  ballX += ballSpeedHorizon;                           
} 

function makeBounceBottom(surface) {        
  ballY = surface-(ballSize/2);          
  ballSpeedVert*=-1;                      
  ballSpeedVert -= (ballSpeedVert * friction); 
}
function makeBounceTop(surface) {          
  ballY = surface+(ballSize/2);          
  ballSpeedVert*=-1;                      
  ballSpeedVert -= (ballSpeedVert * friction); 
} 
function makeBounceLeft(surface) {        
  ballX = surface+(ballSize/2);          
  ballSpeedHorizon*=-1;                   
  ballSpeedHorizon -= (ballSpeedHorizon * friction); 
}
function makeBounceRight(surface) {       
  ballX = surface-(ballSize/2);          
  ballSpeedHorizon*=-1;                 
  ballSpeedHorizon -= (ballSpeedHorizon * friction); 
}

function watchRacketBounce() {          
  var  overhead = mouseY - pmouseY;    

  
  if ((ballX+(ballSize/2) > mouseX-(racketWidth/2)) && (ballX-(ballSize/2) < mouseX+(racketWidth/2))) {
    
    if (dist(ballX, ballY, ballX, mouseY-haddle)<=(ballSize/2)+abs(overhead)+(racketHeight/2)) {
        makeBounceBottom(mouseY-haddle-(racketHeight/2));    
        ballSpeedHorizon = ballSpeedHorizon + (ballX - mouseX)/10;  
        addScore();                 
      if (overhead<0) {                
        ballY+=overhead;               
        ballSpeedVert+=overhead/2;       
      }       
    }
  }
}

function boardAdder() {          
  if (millis()-lastAddTime > boardInterval) {                          
    var randWidth = round(random(minGapWidth, maxGapWidth));          
    var randX = round(random(0, width-randWidth));                     
             
    var randBoard = [randX/2, -boardHeight/2, randWidth, boardHeight, 0]; 
    boards.push(randBoard);                                           
    lastAddTime = millis();                                           
  }
}


function boardDrawer(index) {             
  var board = boards[index];    
  var boardLeftX = board[0];         
  var boardLeftY = board[1];          
  var gapBoardWidth = board[2];       
  var gapBoardHeight = board[3];
  var boardLeftWidth = 2*boardLeftX;      
  var boardRightX = width-(width-(boardLeftWidth+gapBoardWidth))/2; 
  var boardRightY = boardLeftY;                                     
  var boardRightWidth =width-(boardLeftWidth+gapBoardWidth) ;       
  
 // rectMode(CORNER);            
  rectMode(CENTER);              
  fill(boardColor);              
  rect(boardLeftX, boardLeftY, boardLeftWidth, boardHeight, 0, 15, 15, 0);   
  rect(boardRightX, boardRightY,boardRightWidth, boardHeight, 15, 0, 0, 15); 
}

function boardMover(index) {     
  var board = boards[index];     
  board[1]+= boardSpeed;         
}
function boardRemover(index) {           
  var board = boards[index];             
  if (board[1]> height+boardHeight/2) {  
    boards.splice(index,1);              
  }
}
function watchBoardCollision(index) {    
  var board = boards[index];             
  // get gap wall settings  
  var boardLeftX = board[0];             
  var boardLeftY= board[1];              
  var gapBoardWidth = board[2];         
  var gapBoardHeight = board[3];
  var boardScored = board[4];            
  var boardLeftWidth = 2*boardLeftX;      
  var boardRightX = width-(width-(boardLeftWidth+gapBoardWidth))/2; 
  var boardRightY = boardLeftY;                                     
  var boardRightWidth =width-(boardLeftWidth+gapBoardWidth) ;       
  var gapBoardY = boardLeftY;                                      
  var boardMoveDistance = boardSpeed;                              
  
     
    if (
      (ballY>boardLeftY)&&                                      
      (ballX-(ballSize/2)<boardLeftX+boardLeftWidth/2) &&       
      (ballX+(ballSize/2)>boardLeftX-boardLeftWidth/2)          
      ){
        if(dist(ballX, ballY, ballX, boardLeftY)<=(ballSize/2+boardMoveDistance+boardHeight/2)){  
         
           makeBounceTop(boardLeftY+boardHeight/2);             
           ballY+=boardMoveDistance;                            
           ballSpeedVert+= boardSpeed;                          
       }
    }
   
  if ( 
     (ballY> boardRightY)&&                                     
      (ballX-(ballSize/2)<boardRightX+boardRightWidth/2) &&     
      (ballX+(ballSize/2)>boardRightX-boardRightWidth/2)       
      ){
        if(dist(ballX, ballY, ballX, boardRightY)<=(ballSize/2+boardMoveDistance+boardHeight/2)){  

           makeBounceTop(boardRightY+boardHeight/2);            
           ballY+=boardMoveDistance;                           
           ballSpeedVert+= boardSpeed;                         
        }
   }

   if (
      (ballY<boardLeftY)&&                                     
      (ballX-(ballSize/2)<boardLeftX+boardLeftWidth/2) &&      
      (ballX+(ballSize/2)>boardLeftX-boardLeftWidth/2)         
      ){
        if(dist(ballX, ballY, ballX, boardLeftY)<=(ballSize/2-boardMoveDistance+boardHeight/2)){  
          
           makeBounceBottom(boardRightY-boardHeight/2);        
           ballY-=boardMoveDistance;                          
       }
   }
  
  
  if (
    (ballY< boardRightY)&&                                    
      (ballX-(ballSize/2)<boardRightX+boardRightWidth/2) &&   
      (ballX+(ballSize/2)>boardRightX-boardRightWidth/2)      
      ){
        if(dist(ballX, ballY, ballX, boardRightY)<=(ballSize/2-boardMoveDistance+boardHeight/2)){  
           makeBounceBottom(boardRightY-boardHeight/2);       
           ballY-=boardMoveDistance;                          
       }
   }
  
if (ballY < gapBoardY-(boardHeight/2) && boardScored==0) {                                           
    board[4]=1;                                             
    score+=10;                                              
   }   
}

function boardHandler() {                     
  for (var i = 0; i < boards.length; i++) {   
    boardRemover(i);                         
    boardMover(i);                            
    boardDrawer(i);                           
    watchBoardCollision(i);                   
  }
}

 function addScore() {             
   score++;                        
 } 
 function printScore() {           
   textAlign(CENTER);              
   fill(0);                        
   textSize(30);                   
   text(score, width/2, height/20); 
 } 
var canvas =document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//ctx.fillRect(0,0,200,200)

intro();
function intro(){
  ctx.beginPath();
  ctx.font = "80px Impact";
  ctx.fillStyle="white";
  textAlign = "center";
  ctx.fillText("Press Enter to Play" , 100,160); 
  ctx.closePath();
  ctx.beginPath();
  ctx.font = "40px Impact";
  textAlign = "center";

  ctx.fillText("Player one" , 180,300); 
  ctx.fillText("W = Up",180,350);
  ctx.fillText("S  = Down",180,400)
  

  ctx.fillText("Player two" , 480,300); 
  ctx.fillText("Up arrow = Up" ,480,350); 
  ctx.fillText("Down arrow = Down",480,400)

  ctx.closePath();
}


var gameLimit = 2;
var start = true;


function valida(){
  if(scorePc == gameLimit || scorePlayer == gameLimit){
    gameOver();
  }}


function gameOver(){
  ctx.beginPath();
  ctx.font = "80px Arial";
  ctx.strokeStyle="black";
  ctx.lineWidth = 8;
  ctx.strokeText("Game Over!" , 295,180); 
  if(scorePc==gameLimit){
    ctx.font = "50px Arial";
    ctx.strokeStyle="black";
    ctx.lineWidth = 5;
    ctx.strokeText("Winner Player one!" , 315,330);
    ctx.strokeText("Press Enter to Play Again!" , 260,380);

    }
    else if(
    scorePlayer==gameLimit){
      ctx.font = "50px Arial";
      ctx.strokeStyle="black";
      ctx.lineWidth = 5;
      ctx.strokeText("Winner Player two!" , 315,330); 
      ctx.strokeText("Press Enter to Play Again!" , 260
      ,380);
 
      }  
      stop();
    }

function PorteriaPlayer(){
  this.x=160;
  this.y=265;
  this.width=10;
  this.height=100;
  this.onload=function(){
  this.draw()}.bind(this)
  this.draw =function(){
    ctx.fillRect(this.x,this.y,10,100);}}


    function PorteriaPc(){
      this.x=860;
      this.y=265;
      this.width=10;
      this.height=100;
      this.onload=function(){
      this.draw()}.bind(this)
      this.draw =function(){
      ctx.fillRect(this.x,this.y,10,100);}
      }
      
      //Declaraciones


var porteriaPc = new PorteriaPc();
var porteriaPlayer = new PorteriaPlayer();    
var board = new Board();
var ball = new Ball();
var intervalo;
var frames= 100;
var movY = 4;
var movX = 4;
var players=[];
var pcs=[];
var canMove = true;
var canMoveUp =true;
var canMovePc= true;
var canMoveUpPc=true;
var scorePlayer=0;
var scorePc=0;


//clases
function generatePlayers(){
  //portero
  var player1 = new Player(250,270);
  //Defensa
  var player2 = new Player(350,200);
  var player3 = new Player(350,340);
  //Delanteros
  var player4 = new Player(570,160);
  var player5 = new Player(570,260);
  var player6 = new Player(570,380);
  players.push(player1);
  players.push(player2);
  players.push(player3);
  players.push(player4);
 // players.push(player5);
  players.push(player6);
  
    }

function drawPlayers(){
  players.forEach(function(player){
    player.draw();
  })
}

function Player(x, y){
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 50;
  this.img= new Image();
  this.players = [];
  this.img.src= "img/madrid.png";
  this.img.onload= function(){
    this.draw();}.bind(this);
    this.draw =function(){
      //Portero
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    this.move = function(){
      if (canMove){
        this.y +=10;
        canMoveUp = true;
      }
      if (this.y>=430){
        canMove = false;
        if(this.y>=140 && this.y<=430){
        canMoveUp = true;
      }
    }}
    this.moveUp= function(){
      if(canMoveUp){
      this.y -=10;
      canMove = true;
    }
    if(this.y<=140){
      canMoveUp=false;
    }
    if(this.y>=140 && this.y<=430){
      canMove=true;
  }}}
function Pc(x,y){
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 50;
  this.img= new Image();
  this.pcs = [];
  this.img.src= "img/barca.png";
  this.img.onload= function(){
  this.draw();}.bind(this);
  this.draw =function(){
      //Portero
  ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}
this.move = function(){
  if (canMovePc){
    this.y +=10;
    canMoveUpPc = true;
  }
  if (this.y>=430){
    canMovePc = false;
    if(this.y>=140 && this.y<=430){
    canMoveUpPc = true;
  }
}}
this.moveUp= function(){
  if(canMoveUpPc){
  this.y -=10;
  canMovePc = true;
}
if(this.y<=140){
  canMoveUpPc=false;
}
if(this.y>=140 && this.y<=430){
  canMovePc=true;
}}}

function generatePcs(){
  //portero
  var pc1 = new Pc(750,270);
  //Defensa
  var pc2 = new Pc(650,200);
  var pc3 = new Pc(650,340);
  //Delanteros
  var pc4 = new Pc(420,160);
  var pc5 = new Pc(420,260);
  var pc6 = new Pc(420,380);
  pcs.push(pc1);
  pcs.push(pc2);
  pcs.push(pc3);
  pcs.push(pc4);
 // pcs.push(pc5);
  pcs.push(pc6);
}
function drawPcs(){
  pcs.forEach(function(pc){
    pc.draw();
  })
}


function Ball(){
  this.x = 550;
  this.y = 300;
  this.width = 30;
  this.height= 30;
  this.isMoving = true;
  this.isTouching = false;
  this.toUp = false;
  this.toLeft = false;
  this.img = new Image();
  this.img.src= "img/ball.png";
    this.draw =function(){
      
          if(this.toUp){
          this.y-= movY;}
          else{this.y+=movY}
            if(this.toLeft){
            this.x-=movX}else{
              this.x+=movX
            }
            //Paredes laterales
           if(this.x>850){
              this.toLeft=true;
            }else if(this.x<160){
              this.toLeft = false;
            }
            //Piso  
            if(this.y>485){
              this.toUp= true;
            }else if(this.y<130){
              this.toUp = false;
            }
          ctx.drawImage(this.img,this.x,this.y,17,17);
          }

              this.isTouching = function(user){
              return (this.x <=user.x + (user.width*.60)) &&
              (this.x + (this.width*.60) >= user.x) &&
              ((this.y-5) <= user.y + user.height*.90) &&
              ((this.y-5) + this.height>=user.y)} 


            this.isTouchingGoal = function(porteria){
            return  (this.x <=porteria.x + (porteria.width))&&
                    (this.x + (this.width) >= porteria.x) &&
                    (this.y <= porteria.y+ (porteria.height))&&
                    (this.y + (this.height)>=porteria.y)}
            } 


        
function Board(){
this.x=0;
this.y=0;
this.width= 1100
this.height=700;
this.music1 = new Audio();
this.music1.src = "assets/music.mp3";
this.music1.volume = 0.04;
this.music1.loop = true;
this.music = new Audio();
this.music.src = "assets/silbato.mp3";
this.music.volume = 1.0;
this.img = new Image();
this.img.src = "img/soccer.jpg";
ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}


function drawScore(){ 
  ctx.beginPath();
    ctx.font = '24px Arial';
    ctx.fillStyle = "white";
    ctx.fillText("Real Madrid: " + scorePc +"  -  " + "Barcelona: " + scorePlayer,350, 80);
  }



//Validacion
function checkGoalsPc(){
if(ball.isTouchingGoal(porteriaPc)){
  ball.x=400;
  scorePc++
  console.log(scorePc)
  ctx.font = "80px courier";
  ctx.strokeStyle="white";
  ctx.lineWidth = 8;
  ctx.strokeText("GOAL!" , 390,530);
  board.music.play()
  board.music.currentTime =1;
  ;

}
}
function checkGoalsPlayer(){
  if(ball.isTouchingGoal(porteriaPlayer)){
  ball.x=400;
  scorePlayer++;
  console.log(scorePlayer)
  ctx.font = "80px courier";
  ctx.strokeStyle="white";
  ctx.lineWidth = 8;
  ctx.strokeText("GOAL!" , 390,530);
  board.music.play();
  board.music.currentTime = 1;

 }
}



// checar reset 




function startGame(){
  
  Board()
  var preguntaLimit = prompt('Goals to win? :');
  players = []
  pcs = []
  generatePlayers();
  generatePcs()
  drawScore()
  scorePc = 0;
  scorePlayer = 0;
  board.music1.play();
  board.music1.currentTime =1;

  interval = setInterval(function(){
    update()
  }, 1000/60)
} 

function stop(){
  console.log("stop")
  start = true;
  clearInterval(interval);
  interval = 0;
  board.music1.pause();
  board.music1.currentTime = 1;


}       

function update(){	
  frames++;
  ctx.clearRect(0,0, canvas.width, canvas.height)
  Board();
  drawPlayers();
  drawPcs();
  ball.draw();
  PorteriaPlayer();
  checkGoalsPc(porteriaPc)
  checkGoalsPlayer(porteriaPlayer)
  PorteriaPc();
  drawScore();
  valida()

  if (ball.isTouchingGoal(porteriaPc)){
    stop()
  }

  if (ball.isTouchingGoal(porteriaPlayer)){
    stop()
  }

players.forEach(function(user){
  if(ball.isTouching(user))
{  ball.toUp = !ball.toUp;
  ball.toLeft = !ball.toLeft;
  movY=Math.floor(Math.random()*3)+3
  movX=Math.floor(Math.random()*2)+4
}
}
)

pcs.forEach(function(user){
  if(ball.isTouching(user))
{
  ball.toUp = !ball.toUp;
  ball.toLeft = !ball.toLeft;
  movY=Math.floor(Math.random()*3)+3
  movX=Math.floor(Math.random()*2)+4
}})

}


//-----------------------------------------------------------------------

var interval;

//---------------------------------------------------------------

//listeners

addEventListener('keydown', function(e){
    if(e.keyCode ===40 ){
      e.preventDefault();
      pcs[0].move();
      pcs[1].move();
      pcs[2].move();
      pcs[3].move();
    pcs[4].move();
      pcs[5].move();
    }
  else if(e.keyCode===38){
    e.preventDefault();
      pcs[0].moveUp();
      pcs[1].moveUp();
      pcs[2].moveUp();
      pcs[3].moveUp();
      pcs[4].moveUp();
      pcs[5].moveUp();
  }})

  addEventListener('keydown', function(e){
    if(e.keyCode ===83 ){
      e.preventDefault();
      players[0].move();
      players[1].move();
      players[2].move();
      players[3].move();
      players[4].move();
      players[5].move();
    }
  else if(e.keyCode===87){
    e.preventDefault();
    players[0].moveUp();
    players[1].moveUp();
    players[2].moveUp();
    players[3].moveUp();
    players[4].moveUp();
  }})



  document.addEventListener('keydown', function(e){
    if(e.keyCode === 13 && start){
      startGame()
      start = false;
;
    }
  })
  

  






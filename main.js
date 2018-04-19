var canvas =document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//ctx.fillRect(0,0,200,200)

//declaraciones

 
function PorteriaPlayer(){
  this.x=160;
  this.y=265;
  this.width=10;
  this.height=100;
  this.onload=function(){
  this.draw()}.bind(this)
  this.draw =function(){}
    ctx.fillRect(this.x,this.y,10,100);}


    function PorteriaPc(){
      this.x=860;
      this.y=265;
      this.width=10;
      this.height=100;
      this.onload=function(){
      this.draw()}.bind(this)
      this.draw =function(){}
      ctx.fillRect(this.x,this.y,10,100);}
    
    






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
  players.push(player5);
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
  this.height = 60;
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
  this.height = 60;
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
  pcs.push(pc5);
  pcs.push(pc6);
}
function drawPcs(){
  pcs.forEach(function(pc){
    pc.draw();
  })
}


function Ball(){
  this.x = 500;
  this.y = 300;
  this.width = 30;
  this.height= 30;
  this.isMoving = true;
  this.isTouching = false;
  this.toUp = false;
  this.toLeft = false;
  this.img = new Image();
  this.img.src= "img/ball.png";
  this.img.onload = function(){
    this.draw();}.bind(this);
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
          ctx.drawImage(this.img,this.x,this.y,15,15);

              this.isTouching = function(user){
              return (this.x <=user.x + (user.width/2))&&
              (this.x + (this.width/2) >= user.x) &&
              (this.y <= user.y+ (user.height/2))&&
              (this.y + (this.height/2)>=user.y) 
}

            this.isTouchingGoal = function(porteria){
            return  (this.x <=porteria.x + (porteria.width))&&
                    (this.x + (this.width/2) >= porteria.x) &&
                    (this.y <= porteria.y+ (porteria.height))&&
                    (this.y + (this.height/2)>=porteria.y) }}}

        
function Board(){
this.x=0;
this.y=0;
this.width= 1100
this.height=700;
this.img = new Image();
this.img.src = "img/soccer.jpg";
ctx.drawImage(this.img,this.x,this.y,this.width,this.height);

this.drawScore= function(){
  this.score = "score";
  ctx.font = "50px Avenir";
          ctx.fillStyle = "white";
          ctx.fillText(this.score,this.width/2, this.y+50);
}

}

//Validacion
function checkGoalsPc(){
if(ball.isTouchingGoal(porteriaPc)){
  ball.draw();
  ctx.font = "80px courier";
  ctx.strokeStyle="white";
  ctx.lineWidth = 8;
  ctx.strokeText("G00OOOAAALL" , 180,230);
  stop();

}
}
function checkGoalsPlayer(){
  if(ball.isTouchingGoal(porteriaPlayer)){
  ball.draw();
  ctx.font = "80px courier";
  ctx.strokeStyle="white";
  ctx.lineWidth = 8;
  ctx.strokeText("G00OOOAAALL" , 180,230); stop();
  stop();

 }
  }





function startGame(){
	Board()
  players = []
  generatePlayers();
  generatePcs()
} 

function stop(){
  clearInterval(intervalo);
  intervalo = 0;
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

players.forEach(function(user){
  if(ball.isTouching(user))
{  ball.toUp = !ball.toUp;
  ball.toLeft = !ball.toLeft;
  movY=Math.floor(Math.random()*3)+2
  movX=Math.floor(Math.random()*3)+2
}
}
)

pcs.forEach(function(user){
  if(ball.isTouching(user))
{
  ball.toUp = !ball.toUp;
  ball.toLeft = !ball.toLeft;
  movY=Math.floor(Math.random()*3)+2
  movX=Math.floor(Math.random()*3)+2
}})

}

startGame()

//-----------------------------------------------------------------------

var interval;
  interval = setInterval(function(){
 update()

}, 1000/60);

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
    players[5].moveUp();
  }})






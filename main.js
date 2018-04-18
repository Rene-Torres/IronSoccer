var canvas =document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//ctx.fillRect(0,0,200,200)


 

//declaraciones

var board = new Board();
var ball = new Ball();
var intervalo;

var velo = 3;
var vel =10;
var frames= 100;

//clases
    var mov = 3;

function Ball(){
  this.x = 200;
  this.y = 200;
  this.width =30;
  this.height= 30;
  this.isMoving = true;
  this.toUp = false;
  this.toLeft = false;
  this.img = new Image();
  this.img.src= "img/ball.png";
  this.img.onload = function(){
    this.draw();}.bind(this);
    this.draw =function(){
      
      if(this.toUp){
        this.y-= mov;}
        else{this.y+=mov}

          if(this.toLeft){
            this.x-=mov}else{
              this.x+=mov
            }

            //Paredes laterales
           if(this.x>580){
              this.toLeft=true;
            }else if(this.x<90){
              this.toLeft = false;
            }
            //Piso  

            if(this.y>375){
              this.toUp= true;
            }else if(this.y<90){
              this.toUp = false;
            }


        ctx.drawImage(this.img,this.x,this.y,35,35);
this.move = function(){
var rX=this.x+ this.width;
var rY =this.y +this.height;

//arriba y abajo
if(this.toUp){
  this.y-=velo ? velo :vel;
}else{
  this.y+=velo ? velo :vel;
}

if(this.toLeft){
  thos.x-=velo ? velo:vel;
}else{
  this.x+=velo ? velo:vel;
}
//techo piso
 if(rY > 405){
      this.toUp = true;
    }else if(rY < 100 + this.height){
      this.toUp = false;
    }
    //paredes
    if(rX > 600){
      this.toLeft = true;
    }else if(rX < 100 + this.width){
      this.toLeft = false;}
  }
}}









function Board(){
this.x=0;
this.y=0;
this.width= 700
this.height=500;
this.img = new Image();
this.img.src = "img/soccer.png";
ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}






/*var img = new Image();
img.onload = function(){
	ctx.drawImage(img, 0, 0,img.width,img.height)};
img.src = 'img/soccer.png'}
*/
/*function Ball(){
var img2 = new Image();
img2.onload = function(){
	ctx.drawImage(img2,290,200,35,35)}
	img2.src="img/fireball.png";
  move();


  function  move(Ball){
    var rX = this.x + this.radius;
    var rY = this.y + this.radius;
    //arriba y abajo
    if(this.toUp){
      this.y-=velo ? velo : vel;
    }else{
      this.y+=velo ? velo : vel;
    }
    //izq derecha
    if(this.toLeft){
      this.x-=velo ? velo: vel;
    }else{
      this.x+=velo ? velo : vel;
    }
    
    //techo y pis
    if(rY > 355){
      this.toUp = true;
    }else if(rY < 90 + this.radius * 2 ){
      this.toUp = false;
    }
    //paredes
    if(rX > 600){
      this.toLeft = true;
    }else if(rX < 100 + this.radius * 2){
      this.toLeft = false;
    }
  }
	

Ball.prototype.update = function(){
	this.x += this.vx;
	this.y += this.vy;
}

function move2(){
		move.y -=50;}
*/

function startGame(){

	Board()
	Ball();

}



function update(){
	
  frames++;
  ctx.clearRect(0,0, canvas.width, canvas.height)

  Board();
	ball.draw();
 
}
/*var interval;

interval = setInterval(function(){
  ctx.clearRect(0,0,300,200))}
*/
startGame()

//-----------------------------------------------------------------------




//var circle1 = new Circle();
//circle1.draw();


/*addEventListener('mousemove', function(e){
  console.log(e)
  circle2.x = e.clientX;
  circle2.y = e.clientY;
});*/

var interval;

interval = setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //circle1.draw();
  Board()
  //Circle()
  ball.draw()
}, 1000/60);


//---------------------------------------------------------------



//listeners


 addEventListener('keydown', function(e){
  console.log(e)
  ball.x = e.clientX;
  ball.y = e.clientY;
});

/*
addEventListener('keydown', function(e){
    if(e.keyCode ===32 ){
      ball.move();
    }})*/
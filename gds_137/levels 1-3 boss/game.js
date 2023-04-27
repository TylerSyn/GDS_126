
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var ball;
var player;
var score = 0;
var scoreboard;
var paddleLine;
var friction = .9;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


timer = setInterval(animate, interval);

//sets up the ball and the player variables
var player = new gameObject();
var ball = new gameObject();
var scoreboard = new gameObject();
var paddleLine = new gameObject();


//initial ball info
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.vx=0;
ball.gravity = 1;
ball.vy= 0;
player.vx = 0;



function animate()
{
    //clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);



//player acceleration
    if (a) 
    {

        player.vx += -1 * 1.02
    }
    if (d) 
    {

        player.vx += 1 * 1.02
    }


    //friction
  if(!d && !a)
  {
    player.vx *= friction
  }

if (player.vx > 10)
{
    player.vx=10
}
if(player.vx < -10)
{
    player.vx = -10;
}
// player movement
player.x += player.vx









//player edges
    if (player.x + player.width / 2 > canvas.width)
    {
        player.x = canvas.width - player.width/2
        //player.x += -player.vx;
    }
    if (player.x - player.width / 2 < 0) 
    {
        player.x = 0 + player.width/2
       // player.x += -player.vx;
    }

 

    //ball bouncing
    if(ball.y > canvas.height - 40)
    {
        ball.vy = -ball.vy * .67
        ball.y = canvas.height - 40;
    }
    if(ball.x > canvas.width - 40)
    {
        ball.vx = -ball.vx;
        ball.x = canvas.width - 40;
    }
    if(ball.x < 0 + 40)
    {
        ball.vx = -ball.vx;
        ball.x = 0 + 40;
    }



    //player and ball collision
   if( ball.hitTestObject(player))
   {
    console.log("hit")
    ball.vy = -5;
    score ++;
   }

   if (ball.y > canvas.height - 50 )
   {
    score = 0;
   }

 






   
    //draw objects 
    player.drawRect();
    ball.move();
    ball.drawCircle();
    player.hitBoxRects();
    paddleLine.drawLine();
    scoreboard.drawScore();
}
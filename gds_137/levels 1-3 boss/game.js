
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



function animate()
{
    //clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);



//player movement
    if (a) 
    {

        player.vx = player.vx * 1.02
    }
    if (d) 
    {

        player.vx = player.vx * 1.02
    }
// acceleration



    //friction
  if(!d && !a)
  {
    player.vx *= friction
  }
if (player.vx > 10)
{
    player.vx=10
}

player.x += player.vx









//player edges
    if (player.x + player.width / 2 > 1000)
    {
        player.x += -5;
    }
    if (player.x - player.width / 2 < 0) 
    {
        player.x += 5;
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

 







    //draw objects 
    player.drawRect();
    ball.drawCircle();
    ball.move();
    player.hitBoxRects();
    paddleLine.drawLine();
    scoreboard.drawScore();
}
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player1;
var ball;
var player1;
var p1Score = 0;
var p2Score = 0;
var img=document.getElementById("ric");

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


timer = setInterval(animate, interval);

var player1 = new GameObject();
var player2= new GameObject();
var ball = new GameObject();


ball.height = 20;
ball.width = 20;
ball.x=canvas.width/2;
ball.y=canvas.height/2;
ball.vy = 2;
ball.vx=2;

player2.x=canvas.width-5;

function animate()
 {
    //Erase the Screen
    context.clearRect(0, 0, canvas.width, canvas.height);

drawline = function()
{
    context.save();
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(canvas.width/2,0);
    context.lineTo(canvas.width/2,canvas.height );
    context.closePath();
    context.lineWidth = 5; 
    context.stroke();
    context.restore();
}

drawline();


    drawscore = function()
    {
    context.save();
    context.fillStyle = 'black';
    context.font = "20px ariel";
    context.fillText("player 1    |     player 2 ",canvas.width/2 - 87, 15);
    context.font = "18px ariel";
    context.fillText(p1Score + " - " + p2Score,canvas.width/2 - 17, 30);

    context.restore();
    }

    drawscore();
    

    //Update the Screen
    player1.drawRect();

    if (w) 
    {
     //   console.log("up");
        player1.y += -player1.vy;
    }
    if (s) 
    {
     //   console.log("down");
        player1.y += player1.vy;
    }


    if (player1.y + player1.height / 2 > 800)
    {
        player1.y += -5;
    }
    if (player1.y - player1.height / 2 < 0) 
    {
        player1.y += 5;
    }


   // player1.drawRect();


    player2.drawRect2();

    if (up) 
    {
   //     console.log("up p2");
        player2.y += -player2.vy;
    }
    if (down) 
    {
    //    console.log("down p2");
        player2.y += player2.vy;
    }


    if (player2.y + player2.height / 2 > 800)
    {
        player2.y += -5;
    }
    if (player2.y - player2.height / 2 < 0) 
    {
        player2.y += 5;
    }

    player2.drawRect2();



    ball.move();

    function randomRange(high, low) 
    {
        return Math.random() * (high - low) + low;
    }

    if (ball.x < 0 - ball.width / 2) 
    {
        ball.x =  canvas.width/2;
        ball.y = canvas.height/2

        ball.vx = ball.vx * -1;
        p2Score += 1;
    
    }


    if (ball.x > canvas.width + ball.width / 2) 
    {
        ball.x =  canvas.width/2;
        ball.y = canvas.height/2

        ball.vx = ball.vx * -1;
        p1Score += 1;
    
    }

    if (ball.y < 0 + ball.height / 2)
     {
        ball.y = 0 + ball.height / 2;
        ball.vy = ball.vy * -1;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
    }

    if (ball.y > canvas.height - ball.height / 2) 
    {
        ball.y = canvas.height - ball.height / 2;
        ball.vy = ball.vy * -1;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`
    }



    ball.drawCircle();

if(player1.midhitTestObject(ball)===true)
{
   // console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.x = ball.x + ball.width/2/*player1.right()/2*/;
    ball.color = '#f542f5'
}


if(player1.tophitTestObject(ball)===true)
{
  //  console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.vy = -1;
    ball.x = ball.x + ball.width/2/*player1.right()/2*/;
    ball.color='#f542f5'
}


if(player1.bottomhitTestObject(ball)===true)
{
 //   console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.vy = 1;
    ball.x = ball.x + ball.width/2/*player1.right()/2*/;
    ball.color = '#f542f5'

}
    
if(player2.midhitTestObject(ball)===true)
{
  //  console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.x = ball.x - ball.width/2/*player1.right()/2*/;
    ball.color = 'blue'
}


if(player2.tophitTestObject(ball)===true)
{
 //   console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.vy = -1;
    ball.x = ball.x - ball.width/2/*player1.right()/2*/;
    ball.color = 'blue'
}


if(player2.bottomhitTestObject(ball)===true)
{
 //   console.log("ball hit")

    ball.vx = ball.vx * -1;
    ball.vy = 1;
    ball.x = ball.x - ball.width/2/*player1.right()/2*/;
    ball.color = 'blue'

}

}

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player1;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


timer = setInterval(animate, interval);

var player1 = new GameObject();
var ball = new GameObject();


ball.height = 20;
ball.width = 20;


function animate()
 {
    //Erase the Screen
    context.clearRect(0, 0, canvas.width, canvas.height);


    //Update the Screen
    player1.drawRect();

    if (w) 
    {
        console.log("down");
        player1.y += -2;
    }
    if (s) 
    {
        console.log("up");
        player1.y += 2;
    }


    if (player1.y + player1.height / 2 > 800)
     {
        player1.y += -2;
    }
    if (player1.y - player1.height / 2 < 0) 
    {
        player1.y += 2;
    }


    player1.drawRect();




    ball.move();

    function randomRange(high, low) 
    {
        return Math.random() * (high - low) + low;
    }

    if (ball.x < 0 + ball.width / 2) 
    {
        ball.x = 0 + ball.width / 2;
        ball.vx = ball.vx * -1.001;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
    }

    if (ball.x > canvas.width - ball.width / 2)
     {
        ball.x == canvas.width - ball.width / 2;
        ball.vx = ball.vx * -1.001;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
    }

    if (ball.y < 0 + ball.height / 2)
     {
        ball.y = 0 + ball.height / 2;
        ball.vy = ball.vy * -1.001;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`;
    }

    if (ball.y > canvas.height - ball.height / 2) 
    {
        ball.y == canvas.height - ball.height / 2;
        ball.vy = ball.vy * -1.001;
        ball.color = `rgb(${randomRange(255, 0)},${randomRange(255, 0)},${randomRange(255, 0)})`
    }



    ball.drawCircle();

}

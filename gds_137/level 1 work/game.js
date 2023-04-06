
var canvas;
var context;
var timer;

var interval = 1000/60;
var ball;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	

	ball = new Ball();
	ball.vx = -5;
	

	timer = setInterval(animate, interval);

function animate()
{
context.save();
	context.clearRect(0,0,canvas.width, canvas.height);	
	


  ball.move();

	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2;
		ball.vx= ball.vx * -1;
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x == canvas.width - ball.width/2;
		ball.vx= ball.vx * -1;
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2;
		ball.vy= ball.vy * -1;
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y == canvas.height - ball.height/2;
		ball.vy= ball.vy * -1;
	}

	

	ball.draw();

  

	//context.restore();

}

/*
function move(obj)
{
	obj.x += obj.vx;
}
*/
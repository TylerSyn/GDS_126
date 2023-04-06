
var canvas;
var context;
var timer;

var interval = 1000/60;
var ball;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	

	ball = new Ball();
	//ball.vx = -5;
	

	timer = setInterval(animate, interval);

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	
	

    this.count = function()
    {
        this.trial=this.trail+1;
        console.log(this.trial)
    }
    this.count();


	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2;
		ball.vx= ball.vx * -1.02;
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x == canvas.width - ball.width/2;
		ball.vx= ball.vx * -1.02;
	}

	

	ball.draw();

    ball.move();

}

/*
function move(obj)
{
	obj.x += obj.vx;
}
*/
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	


timer = setInterval(animate, interval);

var player1 = new GameObject();


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	//player1.move();

	//Collision
    /*
	if(player1.x < 0 + player1.width/2)
	{
		player1.x = 0 + player1.width/2;
		player1.vx= player1.vx * -1.02;
	}

	if(player1.x > canvas.width - player1.width/2)
	{
		player1.x == canvas.width - player1.width/2;
		player1.vx= player1.vx * -1.02;
	}
    */

	
	//Update the Screen
	player1.drawRect();
}

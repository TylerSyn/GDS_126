//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.force = 3;
	
	follower = new GameObject();
	follower.x = 0;
	follower.y = 0;

	follower2 = new GameObject();
	follower2.x = 0;
	follower2.y = 0;

	follower3 = new GameObject();
	follower3.x = 0;
	follower3.y = 0;

	follower4 = new GameObject();
	follower4.x = 0;
	follower4.y = 0;
	
	
	//friction
	var fX = .80;
	var fY = .80;
	
	var angle = 0;
	
	//gravity gets added to the vy
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	/*-----------This function move the player-----------*/
	//w and s move forward and backward
	//a and d rotate the triangle
	angularMovement();

	//rad = deg* math.PI/180
	//deg = rad *180/math.PI
	

	
	/*-----------These move the follower-----------------*/
	magnet(); //- eases the follower towards the player - 
	point(); //- points at the player
	//follow(); //- follows the player
	//orbit(); //- orbits the player using physics
	//revolve(); //- orbits the player without physics.
	//sinWave(); //- moves the follower in a sin wave pattern from left to right
	
	
	player.drawTriangle();
	follower.drawTriangle();

}

function angularMovement()
{
	if(w)
	{	
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * player.force;
		player.vy += player.ay * player.force;
	}
	
	if(s)
	{
		//Convert Angle to Radians
		var radians = player.angle * Math.PI/180;
		
		//Calculate acceleration modifiers (lengtha and height of triangle)
		player.ax = Math.cos(radians);
		player.ay = Math.sin(radians);
		
		player.vx += player.ax * -player.force;
		player.vy += player.ay * -player.force;
	}
	
	//Rotate Counter Clockwise
	if(a)
	{
		player.angle-=5;
	}
	//Rotate Clockwise
	if(d)
	{
		player.angle+=5;
	}

	//apply physics to velocity
	player.vx *= fX;
	player.vy *= fY;
	
	//apply gravity to velocity
	player.vy += gravity;
	
	//move player
	player.move();
}
	var radius = .25;
function revolve()
{

	angle-=5;
	var radians = angle * Math.PI/180;

	follower.x = player.x + Math.cos(radians) * radius;
	follower.y = player.y + Math.sin(radians) * radius;
	radius += .01;
}
	
function magnet()
{
	//Get the displacement of the follower from the player
	var dx = player.x - follower.x;
	var dy = player.y - follower.y;
	
	//Not using this in this function but...
	//This is the Pythagorean Theorem and gets the hypoteneuse of a triangle.
	//This can be used to get the actual distance between two points.
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	follower.x += dx /25;
	follower.y += dy /25;
}

function point()
{
	var dx = player.x - follower.x;
	var dy = player.y - follower.y;
	
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	var radians = Math.atan2(dy, dx);
	
	follower.angle = radians * 180/Math.PI;

}

function follow()
{
	var dx = player.x - follower.x;
	var dy = player.y - follower.y;
	
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	var radians = Math.atan2(dy, dx);
	
	follower.vx = Math.cos(radians)*follower.force;
	follower.vy = Math.sin(radians)*follower.force;

	follower.x += follower.vx * 2;
	follower.y += follower.vy * 2;
}

function orbit()
{
	var dx = player.x - follower.x;
	var dy = player.y - follower.y;
	
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	var radians = Math.atan2(dy, dx);
	
	angle = radians * 180/Math.PI;
	
	follower.vx += Math.cos(radians)*follower.force;
	follower.vy += Math.sin(radians)*follower.force;
	
	follower.x += follower.vx * 2;
	follower.y += follower.vy * 2;

}

function sinWave()
{
	angle-=5;
	var radians = angle * Math.PI/180;
	follower.y = player.y + Math.sin(radians) * 200;
	follower.x += 2;
}

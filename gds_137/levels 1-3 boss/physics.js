
var friction = .85;	
var gravity = 1;
var Acceleration = 1;
var force = 1;



this.acceleration = function()
{

	if(d)
	{	
		this.vx +=  Acceleration * this.force;
	}
	if(a)
	{
		this.vx += Acceleration * -this.force;
	}

	this.x += this.vx;
}


this.friction = function()
{
	if(d)
	{	
		this.vx += 1 * this.force;
	}
	if(a)
	{
		this.vx += 1 * -this.force;
	}
	

	this.vx *= friction;

	this.x += this.vx;
}

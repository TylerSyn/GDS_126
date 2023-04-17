

function GameObject()
{

this.x=5;
this.y=canvas.height/2;
this.width=10;
this.height=160;
this.color = "#f542f5";
//this.force;
this.vy=5;
this.vx=5;






this.drawCircle = function()
{
    context.save();
    context.beginPath();
    context.translate(this.x,this.y);
    context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
    context.closePath();
    context.fillStyle= this.color;
    context.fill();
    context.restore();

}

this.drawRect = function()
{
    context.save();
    context.fillStyle = this.color;
    context.translate(this.x, this.y);
    context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
    context.restore();

}

this.drawCircle = function()
{
    context.save();
    context.beginPath();
    context.translate(this.x,this.y);
    context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
    context.closePath();
    context.fillStyle= this.color;
    context.fill();
    context.restore();

}

this.drawRect2 = function()
{
    context.save();
    context.fillStyle = 'blue';
    context.translate(this.x, this.y);
    context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
    context.restore();


}





this.size = function()
{
    return this.height/6 * 2;
}


this.move = function()
{

this.x = this.x + this.vx;
this.y = this.y + this.vy;

    this.x += this.vx;
    this.y += this.vy;
}



this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/6;
	}
	this.bottom = function() 
	{
		return this.y + this.height/6;
    }
	
	this.midhitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}


		return false;
	}

    this.tophitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top()-this.size() < obj.bottom() &&
		   this.bottom()-this.size() > obj.top())
		{
			return true
		}
		return false;
	}

    this.bottomhitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top()+this.size() < obj.bottom() &&
		   this.bottom()+this.size() > obj.top())
		{
			return true
		}
		return false;
	}
	



    this.midhitTestObject2 = function(obj)
	{
		if(this.left() > obj.right() && 
		   this.right() < obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}


		return false;
	}

    this.tophitTestObject2 = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top()-this.size() < obj.bottom() &&
		   this.bottom()-this.size() > obj.top())
		{
			return true
		}
		return false;
	}

    this.bottomhitTestObject2 = function(obj)
	{
		if(this.left() > obj.right() && 
		   this.right() < obj.left() &&
		   this.top()+this.size() < obj.bottom() &&
		   this.bottom()+this.size() > obj.top())
		{
			return true
		}
		return false;
	}
	
}





function gameObject()
{
this.x=canvas.width/2;
this.y=canvas.height - 50;
this.width=250;
this.height=40;
this.vy=5;
this.vx=5;
this.gravity=1;

this.drawRect = function()
{
    context.save();
    context.fillStyle = '#00ffff';
  //  context.translate(this.x, this.y);
    context.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    context.restore();
}


this.drawScore = function()
{
context.save();
context.font = "16px ariel black";
context.fillStyle = '#555555';
context.fillText("Score : " + score , 80,25,);
context.restore();
}

this.drawCircle = function()
{
    context.save();
    context.beginPath();
    context.translate(this.x,this.y);
    context.arc(0,0,40,0,360*Math.PI/180,true)
    context.closePath();
    context.fillStyle= '#ff00ff';
    context.fill();
    context.restore();

}

this.drawLine = function()
{
    context.save();
    context.strokstyle = 'black';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(player.x,player.y)
    context.lineTo(ball.x,ball.y)
    context.stroke();
    context.restore();
}

this.hitBoxRects = function()
{
    context.save();
    context.fillStyle = 'red';
  //  context.translate(this.x, this.y);
  /*middle left*/   context.fillRect(this.x-this.width/6 -2.5,this.y-this.height/2 - 2.5,5,5);
    /*middle right*/   context.fillRect(this.x+this.width/6 -2.5,this.y-this.height/2 -2.5,5,5);

    context.fillStyle = 'pink';
    context.fillRect(this.x+this.width/6+this.width/6 -2.5,this.y-this.height/2 -2.5,5,5);
        context.fillRect(this.x+this.width/3+this.width/6 -2.5,this.y-this.height/2 -2.5,5,5);

 

    context.fillStyle = 'green';


   context.fillRect(this.x-this.width/3/*-this.width/6*/ - 2.5,this.y-this.height/2 -2.5,5,5);
    context.fillRect(this.x-this.width/3-this.width/6 - 2.5,this.y-this.height/2 -2.5,5,5);
    context.restore();
}






this.move = function()
{

    this.vy = this.vy + this.gravity/10;

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
    return this.y - this.height/2;
}
this.bottom = function() 
{
    return this.y + this.height/2;
}
this.farLeft=function()
{

}
this.middleRight = function()
{
return this.x + this.width/6
}
this.middleLeft = function()
{
 return this.x - this.width/6
}

this.hitTestObject = function(obj)
{
    if(this.left() < obj.middleLeft() && 
       this.right() > obj.middleRight() &&
       this.top() < obj.bottom() &&
       this.bottom() > obj.top())
    {
        return true;
    }
    return false;
}


}
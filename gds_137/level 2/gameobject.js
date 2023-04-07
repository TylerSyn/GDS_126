

function GameObject()
{

this.x=10;
this.y=canvas.height/2;
this.width=20;
this.height=160;
this.color = "#f542f5";
//this.force;
this.vy=2;
this.vx=2;





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


this.move = function()
{

this.x = this.x + this.vx;
this.y = this.y + this.vy;

    this.x += this.vx;
    this.y += this.vy;
}
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


context.beginPath();
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.stroke();

this.x=0;
this.y=0;
this.width=20;
this.height=0;
this.color="pink";
this.force;
this.vy;
this.vx;


this.draw = function()
{
    context.beginPath();
    context.arc(this.x,this.y,this.width,0,360*Math.PI/180,true)
    context.closePath();
    context.fill();
}

this.draw();

//var ball = new ball();

//ball.draw();
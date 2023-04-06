//var canvas = document.getElementById("canvas");
//var context = canvas.getContext("2d");
//var mainTimer = setInterval(animate, 1000/60);

function Ball()
{

this.x=0;
this.y=0;
this.width=20;
this.height=20;
this.color="#f542f5";
//this.force;
this.vy=5;
this.vx=5;

this.trial=0;




this.draw = function()
{
    context.save();
    context.beginPath();
    context.translate(this.x,this.y);
    context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
    context.closePath();
    context.fillStyle= this.color;
    context.fill();
    context.restore();




//animate();

//var ball = new Ball();




}

/*function animate()
{
//Clear the Canvas
//context.clearRect(0,0,canvas.width,canvas.height)
context.save();
//Move the Ball
this.draw();
this.move();

//Update the Canvas
//this.draw;
context.restore();
}
*/



this.move = function()
{

this.x = this.x + this.vx;
this.y = this.y + this.vy;

    this.x += this.vx;
    this.y += this.vy;
}
}




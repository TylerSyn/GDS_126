var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

    interval = 1000/60;
	timer = setInterval(animate, interval);

    function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

    

}
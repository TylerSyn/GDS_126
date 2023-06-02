var canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", track);
canvas.addEventListener("click", instructions);

var context = canvas.getContext("2d");


var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};



function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}

var ex1 = new GameObject({width:150,height:50,color:"green"})
ex1.x=canvas.width/2;
ex1.y=475;

var ex2 = new GameObject({width:150,height:50,color:"red"})
ex2.x=canvas.width/2;
ex2.y=530;

var ex3 = new GameObject({width:150,height:50,color:"blue"})
ex3.x=canvas.width/2;
ex3.y=585;

var ex4 = new GameObject({width:150,height:50,color:"grey"})
ex4.x=canvas.width/2;
ex4.y=640;

var intStruct = new GameObject({width:150,height:50,color:"pink"})
intStruct.x=canvas.width/2;
intStruct.y=695;

var BLOCK = new GameObject({width:150,height:150,color:"pink"})
BLOCK.x=canvas.width/2;
BLOCK.y=350;




function instructions()
{
	var dx = intStruct.x - mouse.x;
	var dy = intStruct.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dx < 75 && dx > -75 && dy < 25 && dy > -25)
	{

        window.open("instuctions.html");
		console.log("instructions");
        console.log(dx);
	}
}

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
    if(BLOCK.x > canvas.width + BLOCK.width)
    {
    BLOCK.x = 0-BLOCK.width;
    }
    BLOCK.x+=5;
    BLOCK.drawRect();



   ex1.drawRect(); 
   ex2.drawRect(); 
   ex3.drawRect(); 
   ex4.drawRect(); 
   intStruct.drawRect(); 

   context.fillStyle = "black";
   context.font = "bold 16px Arial"
   context.textAlign = "center";
   context.fillText("running",canvas.width/2,475);
   context.fillText("timer",canvas.width/2,530);
   context.fillText("moving platforms",canvas.width/2,585);
   context.fillText("different platforms",canvas.width/2,640);
   context.fillText("Instructions",canvas.width/2,695);

   context.font = "16px Arial"
   context.fillText("Tyler Synott",950,790);

   context.font = "32px Arial"
   context.fillText("Cuber",canvas.width/2,200);


}




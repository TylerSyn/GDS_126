var canvas;
var context;
var timer;
var interval;
var player;
var score = 0;
var hitColorTimer = 10/1000;
var fX = .85;

var amount = 5;
var boxes = [];
var dots = [];




	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

    interval = 1000/60;
	timer = setInterval(animate, interval);

    
	for(var i = 0; i < amount; i++)
	{
		boxes[i] = new GameObject({width:20, height:20});
		
		boxes[i].color = "#40e66c"
	
		boxes[i].x = Math.random() * canvas.width;
		boxes[i].y = -20
		boxes[i].vy = Math.random() * 1 + 5;
	}
    for(var i = 0; i < amount; i++)
	{
		dots[i] = new GameObject({width:20, height:20});
		
		dots[i].color = "red"
	
		dots[i].x = Math.random() * canvas.width;
		dots[i].y = -20
		dots[i].vy = Math.random() * 1 + 5;
	}

    player = new GameObject({x:canvas.width/2, y:canvas.height-50, width:50,height:50,color:"#ffff00"});

    function colorReset()
    {
        player.color = "#ffff00";
    }


    function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

    context.fillStyle = "gray";
    context.fillRect(0, 0, canvas.width, canvas.height);





    //playermovement

    if(a)
    {
        player.vx += -player.ax * player.force ;
    }
    if(d)
    {
        player.vx += player.ax * player.force ;
    }

    player.vx *= fX;
    player.x +=player.vx


    //hitdetection
    for(var i=0;i< boxes.length; i++)
    {
	    if(player.hitTestObject(boxes[i]))
	    {
        boxes[i].y = 0 - boxes[i].height
        score++
        player.color="#04ba35"
        setTimeout(colorReset,500);
	    }
    }

    for(var i=0;i< dots.length; i++)
    {
	    if(player.hitTestObject(dots[i]))
	    {
        dots[i].y = 0 - dots[i].height
        score=0
        player.color="#ff4252";
        setTimeout(colorReset,500);
        }
    }

//player wall collision
if(player.x < 0 +player.width/2)
{
    player.x-=player.vx
}
if(player.x > canvas.width-player.width/2)
{
    player.x-=player.vx
}


    //draw objects
    player.drawRect();

	for(var p = 0; p < boxes.length; p++)
	{	
		
		boxes[p].y += boxes[p].vy;
			

			if(boxes[p].y >= canvas.height+boxes[p].height/2)
			{
				boxes[p].y = 0-boxes[p].height/2;
                boxes[p].x = Math.round(Math.random()*canvas.width)

			boxes[p].vy = Math.round(Math.random() * (4-2)+2);

			}
		
		boxes[p].drawRect();
	}

    for(var p = 0; p < dots.length; p++)
	{	
		
		dots[p].y += dots[p].vy;
			

			if(dots[p].y >= canvas.height+dots[p].height/2)
			{
				dots[p].y = 0-dots[p].height/2;
                dots[p].x = Math.round(Math.random()*canvas.width)

			dots[p].vy = Math.round(Math.random() * (4-2)+2);

			}
		
		dots[p].drawCircle();
	}




    context.fillStyle = "black"
    context.font="bold 30px black, arial";
    context.fillText("score:"+score,20,30);
}
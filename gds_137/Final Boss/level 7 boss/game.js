//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


		

	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

    var Time = 100000;
    var timerEngage = false;
    var states=[];
    var currentState = 0;




function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

    states[currentState]();

}
states[0]=function()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

     context.font="28px arial"
     context.fillText("press space to start!",canvas.width/2-120,canvas.height/2,1000)

    if(space)
    {
        Time = 10000;
        currentState = 1;
		timerEngage = false;
		player = new GameObject({x:100, y:canvas.height/2-100});

		platform0 = new GameObject();
			platform0.width = 334;
			platform0.x = canvas.width/2 - 350 ;
			platform0.y = canvas.height - platform0.height/2;
			platform0.color = "#66ff33";
			//platform Ice
			platform1 = new GameObject();
			platform1.width = 334;
			platform1.x = canvas.width/2 - 20 ;
			platform1.y = canvas.height - platform1.height/2;
			platform1.color = "#03fcec";
			//platform gravity up
			platform2 = new GameObject();
			platform2.width = 1200;
			platform2.x = canvas.width/2 ;
			platform2.y = 0 + platform2.height/2;
			platform2.color = "#ca03fc";
			//platform gravity down
			platform3 = new GameObject();
			platform3.width = 334;
			platform3.x = canvas.width - platform3.width/2 -17;
			platform3.y = canvas.height - platform3.height/2;
			platform3.color = "#ca03fc";
    }

}



states[1]=function()
{

if(Time <= 0)
{
    setTimeout(1000)
    currentState = 0;
}


	if(w || s || d || a || shift)
{
    timerEngage = true;
}

     context.font="16px arial"
     context.fillText(Math.round(Time/100),16,16,50)


     if(timerEngage)
     {
        Time -= 1;
     }



	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	// if(a)
	// {
	// 	player.vx += -player.ax * player.force;
	// }
	// if(d)
	// {
	// 	player.vx += player.ax * player.force;
	// }
    if(shift)
    {
        if(a)
        {
            player.vx += -player.ax * player.force * 3;
        }
        if(d)
        {
            player.vx += player.ax * player.force * 3;
        }
    }
    else
    {
        if(a)
        {
            player.vx += -player.ax * player.force;
        }
        if(d)
        {
            player.vx += player.ax * player.force;
        }
    }


	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
//platform0
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
//platform 1 ice

if(player.hitTestObject(platform1))
{
	player.y =canvas.height - platform1.height - player.height/2;
	player.vy = 0;
	player.canJump = true;
	fX=.95;
}
else
{
	fX =.85;
}
	// if(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	// {
	// 	player.y--;
	// 	player.vy = 0;
	// 	player.canJump = true;
	// 	fX=.95;
	// }
	// else{
	// 	fX =.85;
	// }

	// while(platform1.hitTestPoint(player.left()/2) && player.vx <=0)
	// {
	// 	player.x++;
	// 	player.vx = 0;
	// }
	// while(platform1.hitTestPoint(player.right()/2) && player.vx >=0)
	// {
	// 	player.x--;
	// 	player.vx = 0;
	// }
	// while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	// {
	// 	player.y++;
	// 	player.vy = 0;
	// }
	//platform 2 down
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		gravity = 1;
		player.canJump=true;
	}

	//platform 3 up
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		player.x += platform2.vx
		gravity = -1
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	


	if ( player.y >= canvas.height + player.height)
	{
		player.y = 0 - player.width;
	}
	if ( player.y < 0 - player.height)
	{
		player.y = canvas.width + player.width;
	}
	if ( player.x > canvas.width + player.width)
	{
		player.x = 0 - player.width;
	}
	if ( player.x < 0 - player.width)
	{
		player.x = canvas.width + player.width;
	}


	//platform movement
	if(timerEngage)
	{
		if(platform1.y < 200)
		{
			platform1.vy *= -1;
		}
		if(platform1.y > canvas.height - platform1.height/3)
		{
			platform1.vy *= -1;
		}
		platform1.y += platform1.vy
	}
	if(timerEngage)
	{
		if(platform2.x < canvas.width/2)
		{
			platform2.vx *= -1;
		}
		if(platform2.x > canvas.width - platform1.width/2)
		{
			platform2.vx *= -1;
		}
		platform2.x += platform2.vx

	}


	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();

	//Show hit points
	player.drawRect();
}
 
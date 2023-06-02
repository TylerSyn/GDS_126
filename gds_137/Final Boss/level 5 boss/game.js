//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 2000;
		platform0.x = platform0.width/2 - 150;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

    var Time = 6000;
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
        Time = 6000;
        currentState = 1;
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

	
	
	platform0.drawRect();

	//Show hit points
	player.drawRect();
}
 
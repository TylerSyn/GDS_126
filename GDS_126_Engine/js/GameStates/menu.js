/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200});
//startButton.img.src="images/mrt.jpg"

startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/game start copy.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.img.src = "images/start button hover.png"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/start button.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	

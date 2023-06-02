var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

context.fillStyle = "black";
context.font = "bold 32px Arial"
context.textAlign = "center";
context.fillText("Instructions" , canvas.width/2, 200)

context.font = "bold 28px Arial"
context.fillText("w to jump" , canvas.width/2, 270)
context.fillText("s to move left" , canvas.width/2, 300)
context.fillText("d to move right" , canvas.width/2, 325)
context.fillText("all can allow you to have fun" , canvas.width/2, 350)
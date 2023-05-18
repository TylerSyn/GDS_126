var canvas = document.getElementById("testCanvas");
var stage = new createjs.Stage(canvas);

var data = new createjs.SpriteSheet({
    "images": ["path/to/image.png"],
    "frames": {"regX": 0, "height": 96, "count": 10, "regY": 0, "width": 75},
    "animations": {"walk": [0, 9]}
    });
    character = new createjs.Sprite(data, "walk");
    character.play();






/*
    var stage = new createjs.Stage("demoCanvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        */
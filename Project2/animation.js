"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite1: undefined,
	sprite2: undefined,
	sprite3: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the parrot to be displayed.
    Scene.sprite1 = pikachu;
	Scene.sprite2 = loading;
	Scene.sprite3 = bubble;
	// Attach the image to be used for the sprite.
	Scene.sprite1.img1 = new Image();
	Scene.sprite2.img2 = new Image();
	Scene.sprite3.img3 = new Image();

    Scene.sprite1.img1.src = Scene.sprite1.src;
	Scene.sprite2.img2.src = Scene.sprite2.src;
	Scene.sprite3.img3.src = Scene.sprite3.src;
	
	//var x1 = Scene.sprite1.frames[Scene.sprite1.frame].frame.w/2;
	//var y1 = Scene.sprite1.frames[Scene.sprite1.frame].frame.h/2;	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite1.img1.onload = function() {		

    	//Scene.mainLoop();
	}

	Scene.sprite2.img2.onload = function() {	
	
		//Scene.sprite2.offset= Scene.sprite2.frames[Scene.sprite2.frame].frame.w/2;
    	//Scene.mainLoop();
	}
	Scene.sprite3.img3.onload = function() {	
	
		//Scene.sprite2.offset= Scene.sprite2.frames[Scene.sprite2.frame].frame.w/2;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 /6);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	//Scene.sprite.offset+=24;
	//if(Scene.sprite.offset>Scene.canvas.width)
 		//Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

var hold = 0;
Scene.draw = function () {
/* 	var img = new Image();
	img.src = "./C.PNG";
	img.onload = function(){
		
	} */
	//Scene.canvasContext.drawImage(Scene.sprite1.img1,Scene.canvas.width/2 - Scene.sprite1.frames[0].frame.w/2, Scene.canvas.height/2-Scene.sprite1.frames[0].frame.h/2);
	Scene.canvasContext.drawImage(Scene.sprite2.img2,Scene.sprite2.frames[Scene.sprite2.frame].frame.x,Scene.sprite2.frames[Scene.sprite2.frame].frame.y,Scene.sprite2.frames[Scene.sprite2.frame].frame.w,Scene.sprite2.frames[Scene.sprite2.frame].frame.h,Scene.canvas.width/2 - Scene.sprite2.frames[0].frame.w/2,Scene.canvas.height/2-Scene.sprite2.frames[0].frame.h/2,Scene.sprite2.frames[Scene.sprite2.frame].frame.w,Scene.sprite2.frames[Scene.sprite2.frame].frame.h);
	Scene.canvasContext.drawImage(Scene.sprite1.img1,Scene.sprite1.frames[Scene.sprite1.frame].frame.x,Scene.sprite1.frames[Scene.sprite1.frame].frame.y,Scene.sprite1.frames[Scene.sprite1.frame].frame.w,Scene.sprite1.frames[Scene.sprite1.frame].frame.h,Scene.canvas.width/2 - Scene.sprite1.frames[0].frame.w/2,Scene.canvas.height/2-Scene.sprite1.frames[0].frame.h/2,Scene.sprite1.frames[Scene.sprite1.frame].frame.w,Scene.sprite1.frames[Scene.sprite1.frame].frame.h);
	Scene.canvasContext.drawImage(Scene.sprite3.img3,Scene.sprite3.frames[Scene.sprite3.frame].frame.x,Scene.sprite3.frames[Scene.sprite3.frame].frame.y,Scene.sprite3.frames[Scene.sprite3.frame].frame.w,Scene.sprite3.frames[Scene.sprite3.frame].frame.h,Scene.canvas.width/2 - Scene.sprite3.frames[0].frame.w/2 + 220,Scene.canvas.height/2-Scene.sprite3.frames[0].frame.h/2 - 100,Scene.sprite3.frames[Scene.sprite3.frame].frame.w,Scene.sprite3.frames[Scene.sprite3.frame].frame.h);
	// Advance to the next frame.
	Scene.sprite1.frame++;
	Scene.sprite2.frame++;
	if(hold >= 10){
		Scene.sprite3.frame++;
		hold = 0;
	}
	else{
		hold++;
	}
	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite1.frame==Scene.sprite1.frames.length)
		Scene.sprite1.frame=0;
	if(Scene.sprite2.frame==Scene.sprite2.frames.length)
		Scene.sprite2.frame=0;
	if(Scene.sprite3.frame==Scene.sprite3.frames.length)
		Scene.sprite3.frame=0;
};


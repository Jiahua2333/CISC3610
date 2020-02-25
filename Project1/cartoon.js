"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition : 0,
	x: 0,
	y: 0
};


Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
	Game.x = Game.canvas.width;
	Game.y = Game.canvas.height;
    Game.canvasContext = Game.canvas.getContext("2d");
	
    Game.mainLoop();
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
    Game.clearCanvas();
	Game.canvasContext.fillStyle = "blue";
	Game.canvasContext.fillRect(0, 0, Game.canvas.width, Game.canvas.height);
    Game.update();
	Game.drawSun();
	Game.drawCloud();
	Game.drawBlocks();
	Game.drawRiver();
	Game.drawMountains();
	Game.drawHourse();
	Game.drawRoad();
	Game.drawGlass();
	Game.drawText();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
/*     var d = new Date();
    Game.rectanglePosition = d.getTime() % Game.canvas.width; */
};

/* Game.draw = function () {
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect(Game.rectanglePosition, 100, 50, 50);
}; */

Game.drawText = function(){
	Game.canvasContext.font = "20px Arial"
	Game.canvasContext.fillText("The village with single house", 10*Game.x/800, 250*Game.y/480);
}

Game.drawHourse = function(){
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(570*Game.x/800, 270*Game.y/480);
	Game.canvasContext.lineTo(530*Game.x/800, 300*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.lineTo(570*Game.x/800, 270*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#663300";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(570*Game.x/800, 270*Game.y/480);
	Game.canvasContext.lineTo(650*Game.x/800, 250*Game.y/480);
	Game.canvasContext.lineTo(690*Game.x/800, 300*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.lineTo(570*Game.x/800, 270*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#663300";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(530*Game.x/800, 300*Game.y/480);
	Game.canvasContext.lineTo(530*Game.x/800, 400*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 420*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.lineTo(530*Game.x/800, 300*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#ff9933";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 420*Game.y/480);
	Game.canvasContext.lineTo(690*Game.x/800, 400*Game.y/480);
	Game.canvasContext.lineTo(690*Game.x/800, 300*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 320*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#ff9933";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(557*Game.x/800, 407*Game.y/480);
	Game.canvasContext.lineTo(583*Game.x/800, 413*Game.y/480);
	Game.canvasContext.lineTo(583*Game.x/800, 363*Game.y/480);
	Game.canvasContext.lineTo(557*Game.x/800, 357*Game.y/480);
	Game.canvasContext.lineTo(557*Game.x/800, 407*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#ffffff";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.arc(565*Game.x/800, 388*Game.y/480, 4*Game.x/800, 0, Math.PI*2, true);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#999966";
	Game.canvasContext.fill();
}

Game.drawRoad = function(){
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(530*Game.x/800, 400*Game.y/480);
	Game.canvasContext.lineTo(245*Game.x/800, 400*Game.y/480);
	Game.canvasContext.quadraticCurveTo(230*Game.x/800, 410*Game.y/480, 220*Game.x/800, 420*Game.y/480);
	Game.canvasContext.lineTo(610*Game.x/800, 420*Game.y/480);
	Game.canvasContext.lineTo(530*Game.x/800, 400*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#cccc00";
	Game.canvasContext.fill();
}

Game.drawGlass = function(){
	var i;
	for(i=250*Game.x/800; i< 520; i = i+15 ){
		Game.canvasContext.beginPath();
		Game.canvasContext.moveTo(i*Game.x/800, 400*Game.y/480);
		Game.canvasContext.lineTo((i+20)*Game.x/800, 400*Game.y/480);
		Game.canvasContext.moveTo((i+10)*Game.x/800, 400*Game.y/480);
		Game.canvasContext.quadraticCurveTo((i+10)*Game.x/800, 395*Game.y/480, i*Game.x/800, 390*Game.y/480);
		Game.canvasContext.moveTo((i+10)*Game.x/800, 400*Game.y/480);
		Game.canvasContext.lineTo((i+10)*Game.x/800, 385*Game.y/480);
		Game.canvasContext.moveTo((i+10)*Game.x/800, 400*Game.y/480);
		Game.canvasContext.quadraticCurveTo((i+10)*Game.x/800, 395*Game.y/480, (i+20)*Game.x/800, 390*Game.y/480);
		Game.canvasContext.stroke();
		Game.canvasContext.fillStyle = "#cccc00";
		Game.canvasContext.fill();
	}
	
	var j;
	for(j=220*Game.x/800; j< 610; j = j+15 ){
		Game.canvasContext.beginPath();
		Game.canvasContext.moveTo(j*Game.x/800, 420*Game.y/480);
		Game.canvasContext.lineTo((j+20)*Game.x/800, 420*Game.y/480);
		Game.canvasContext.moveTo((j+10)*Game.x/800, 420*Game.y/480);
		Game.canvasContext.quadraticCurveTo((j+10)*Game.x/800, 415*Game.y/480, j*Game.x/800, 410*Game.y/480);
		Game.canvasContext.moveTo((j+10)*Game.x/800, 420*Game.y/480);
		Game.canvasContext.lineTo((j+10)*Game.x/800, 405*Game.y/480);
		Game.canvasContext.moveTo((j+10)*Game.x/800, 420*Game.y/480);
		Game.canvasContext.quadraticCurveTo((j+10)*Game.x/800, 415*Game.y/480, (j+20)*Game.x/800, 410*Game.y/480);
		Game.canvasContext.stroke();
		Game.canvasContext.fillStyle = "#cccc00";
		Game.canvasContext.fill();
	}
}

Game.drawBlocks = function(){
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(0*Game.x/800, 200*Game.y/480);
	Game.canvasContext.quadraticCurveTo(170*Game.x/800, 190*Game.y/480, 340*Game.x/800,200*Game.y/480);
    Game.canvasContext.quadraticCurveTo(200*Game.x/800, 300*Game.y/480, 0*Game.x/800,400*Game.y/480);	
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#006600";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(800*Game.x/800, 200*Game.y/480);
	Game.canvasContext.quadraticCurveTo(620*Game.x/800, 190*Game.y/480, 440*Game.x/800,200*Game.y/480);	
	Game.canvasContext.quadraticCurveTo(300*Game.x/800, 360*Game.y/480, 150*Game.x/800,480*Game.y/480);
	Game.canvasContext.lineTo(800*Game.x/800, 480*Game.y/480);
	Game.canvasContext.lineTo(800*Game.x/800, 200*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#006600";
	Game.canvasContext.fill();
}

Game.drawRiver = function(){
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(340*Game.x/800, 200*Game.y/480);
	Game.canvasContext.quadraticCurveTo(200*Game.x/800, 300*Game.y/480, 0*Game.x/800,400*Game.y/480);
	Game.canvasContext.lineTo(0*Game.x/800, 480*Game.y/480);
	Game.canvasContext.lineTo(150*Game.x/800, 480*Game.y/480);
    Game.canvasContext.quadraticCurveTo(300*Game.x/800, 360*Game.y/480, 440*Game.x/800,200*Game.y/480);
	Game.canvasContext.quadraticCurveTo(390*Game.x/800, 190*Game.y/480, 340*Game.x/800,200*Game.y/480);
	Game.canvasContext.stroke();
	Game.canvasContext.fillStyle = "#0066ff";
	Game.canvasContext.fill();
}

Game.drawSun = function () {
	Game.canvasContext.beginPath();
	Game.canvasContext.arc(75*Game.x/800, 75*Game.y/480, 30*Game.x/800, 0, Math.PI*2, true);
	Game.canvasContext.fillStyle = "Yellow";
	Game.canvasContext.fill();
}

Game.drawCloud = function() {
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(120*Game.x/800, 120*Game.y/480);
	Game.canvasContext.quadraticCurveTo(120*Game.x/800, 105*Game.y/480, 135*Game.x/800,95*Game.y/480);
	Game.canvasContext.quadraticCurveTo(145*Game.x/800, 93*Game.y/480, 150*Game.x/800,105*Game.y/480);
	Game.canvasContext.quadraticCurveTo(160*Game.x/800, 70*Game.y/480, 180*Game.x/800,70*Game.y/480);
	Game.canvasContext.quadraticCurveTo(190*Game.x/800, 72*Game.y/480, 200*Game.x/800,100*Game.y/480);
	Game.canvasContext.quadraticCurveTo(204*Game.x/800, 97*Game.y/480, 210*Game.x/800,97*Game.y/480);
	Game.canvasContext.quadraticCurveTo(225*Game.x/800, 105*Game.y/480, 230*Game.x/800,120*Game.y/480);	
	Game.canvasContext.lineTo(120*Game.x/800, 120*Game.y/480);
	Game.canvasContext.fillStyle = "#ccffff";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo((150+120)*Game.x/800, (120-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+120)*Game.x/800, (105-60)*Game.y/480, (150+135)*Game.x/800,(95-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+145)*Game.x/800, (93-60)*Game.y/480, (150+150)*Game.x/800,(105-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+160)*Game.x/800, (70-60)*Game.y/480, (150+180)*Game.x/800,(70-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+190)*Game.x/800, (72-60)*Game.y/480, (150+200)*Game.x/800,(100-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+204)*Game.x/800, (97-60)*Game.y/480, (150+210)*Game.x/800,(97-60)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((150+225)*Game.x/800, (105-60)*Game.y/480, (150+230)*Game.x/800,(120-60)*Game.y/480);	
	Game.canvasContext.lineTo((150+120)*Game.x/800, (120-60)*Game.y/480);
	Game.canvasContext.fillStyle = "#ccffff";
	Game.canvasContext.fill();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo((75+120)*Game.x/800, (120+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+120)*Game.x/800, (105+30)*Game.y/480, (75+135)*Game.x/800,(95+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+145)*Game.x/800, (93+30)*Game.y/480, (75+150)*Game.x/800,(105+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+160)*Game.x/800, (70+30)*Game.y/480, (75+180)*Game.x/800,(70+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+190)*Game.x/800, (72+30)*Game.y/480, (75+200)*Game.x/800,(100+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+204)*Game.x/800, (97+30)*Game.y/480, (75+210)*Game.x/800,(97+30)*Game.y/480);
	Game.canvasContext.quadraticCurveTo((75+225)*Game.x/800, (105+30)*Game.y/480, (75+230)*Game.x/800,(120+30)*Game.y/480);	
	Game.canvasContext.lineTo((75+120)*Game.x/800, (120+30)*Game.y/480);
	Game.canvasContext.fillStyle = "#ccffff";
	Game.canvasContext.fill();
}

Game.drawMountains = function(){
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(480*Game.x/800, 220*Game.y/480);
	Game.canvasContext.quadraticCurveTo(513*Game.x/800, 170*Game.y/480, 540*Game.x/800,80*Game.y/480);
	Game.canvasContext.quadraticCurveTo(560*Game.x/800, 40*Game.y/480, 570*Game.x/800,50*Game.y/480);	
	Game.canvasContext.quadraticCurveTo(590*Game.x/800, 70*Game.y/480, 600*Game.x/800, 90*Game.y/480);
	Game.canvasContext.quadraticCurveTo(650*Game.x/800, 190*Game.y/480, 680*Game.x/800, 220*Game.y/480);
	Game.canvasContext.fillStyle = "#009933";
	Game.canvasContext.fill();
	Game.canvasContext.stroke();
	Game.canvasContext.beginPath();
	Game.canvasContext.moveTo(600*Game.x/800, 220*Game.y/480);
	Game.canvasContext.quadraticCurveTo(620*Game.x/800, 210*Game.y/480, 680*Game.x/800,120*Game.y/480);
	Game.canvasContext.quadraticCurveTo(685*Game.x/800, 110*Game.y/480, 700*Game.x/800,100*Game.y/480);	
	Game.canvasContext.quadraticCurveTo(715*Game.x/800, 110*Game.y/480, 720*Game.x/800, 120*Game.y/480);
	Game.canvasContext.quadraticCurveTo(750*Game.x/800, 170*Game.y/480, 800*Game.x/800, 220*Game.y/480);
	Game.canvasContext.fillStyle = "#009933";
	Game.canvasContext.fill();
	Game.canvasContext.stroke();
}


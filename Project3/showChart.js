"use strict";

var valSet = {
    canvas1 : undefined,
    canvasContext1 : undefined,
	canvas2 : undefined,
    canvasContext2 : undefined,
	content: undefined,
};

valSet.canvas1 = document.getElementById("myCanvas");
valSet.canvasContext1 = valSet.canvas1.getContext("2d");
valSet.canvas2 = document.getElementById("myCanvas2");
valSet.canvasContext2 = valSet.canvas2.getContext("2d");
valSet.content = data;
/* var key, count = 0; 
    for (key in valSet.content) { 
        if (valSet.content.hasOwnProperty(key)) 
            count++; 
        }  */
//var labels1 = new Array(valSet.content.data.length);
var labels1 = getLabels(valSet.content.data.length, valSet.content);
var data = getData(valSet.content.data.length, valSet.content);
var backgroundColor = getRandomColor(valSet.content.data.length);
//valSet.canvasContext.front = "30px Arial";
//valSet.canvasContext.fillText(valSet.content.data.length, 10, 50);
//valSet.canvasContext.fillText(valSet.content.data[1].DBN, 10, 50);
var title = "2012-2013 Transfer High School Progress Report"
drawChart('doughnut', labels1, data, "Overall Score", title, "myCanvas", backgroundColor);
drawChart('horizontalBar', labels1, data, "Overall Score", title, "myCanvas2", backgroundColor)

function getRandomColor(length) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  var backgroundColor = new Array(length);
  for(var j=0; j<length; j++){
	  for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		
	  }
	  backgroundColor[j] = color;
	  color = '#';
  }
  return backgroundColor;
}

function getLabels(length, object){
	var labels = new Array(length);
	var i
	for(i=0; i<length; i++){
		labels[i] = object.data[i].SchoolName;
		//console.log(" " + labels[i]);
	}
	return labels;
}

function getData(length, object){
	var data = new Array(length);
	var i
	for(i=0; i<length; i++){
		data[i] = object.data[i].OverallScore;
		console.log(" " + data[i]);
	}
	return data;
}

function drawChart(type, labels, data, label, title, ids, backgroundColor){
	new Chart(document.getElementById(ids), {
    type: type,
    data: {
      //labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	  labels: labels,
      datasets: [
        {
          //label: "Population (millions)",
		  label: label,
          //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#c45850","#c45850","#c45850","#c45850","#c45850"],
		  backgroundColor: backgroundColor,
          //data: [2478,5267,734,784,433]
		  data: data
        }
      ]
    },
    options: {
      title: {
        display: true,
        //text: 'Predicted world population (millions) in 2050'
		text: title
      }
    }
});
}



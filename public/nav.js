
var svgCanvas = document.getElementById("svg2");
var viewPort = document.getElementById("viewport");


var drag = false;
var offset = { x: 0, y: 0}
var factor = .1;
var m = new DOMMatrix();

//https://stackoverflow.com/questions/55453969/svg-object-how-to-zoom-and-drag-it-properly
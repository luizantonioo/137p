modelStatus = "";
objects = [];//matriz ou array

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detectando Objetos";
 }
function draw(){
image(img, 0 , 0, 640, 420);
if(modelStatus != ""){
    for(i=0; i < objects.length; i++){ //inicio,fim e intervalo
document.getElementById("status").innerHTML = "Status: Objeto Detectado";
fill(255,0,0);
 noFill();
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
stroke(255,0,0);
rect( objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}

// fill(255,0,0);
// noFill();
// stroke(255,0,0);
// text("dog", 45, 75);
// rect(30,60,450,350);

// fill(255,0,0);
// noFill();
// stroke(255,0,0);
// text("cat", 315,105);
// rect(300,90,270,320);
}
function preload(){
img = loadImage("Biblia-foto.jpg");
}
function modelLoaded(){
console.log("Modelo carregado!");
modelStatus = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
console.error(error);
}
else {
console.log(results);
objects = results;
}
}
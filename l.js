img="";
objects=[];
status="";
objectDetector="";

function preload(){
    img= loadImage('l.jpg');

}

     function setup() {
        canvas = createCanvas(640, 350);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }
  function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects= results;
}
function draw(){
  image(img,0,0,640,420);
  if(status !=""){
    for(i=0; i< objects.length; i++){
    document.getElementById("status").innerHTML="Status: Object Detected";
    fill("white");
    percent= floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("white");
    rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width);
  }
}}
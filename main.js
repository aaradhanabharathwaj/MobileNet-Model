function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelLoaded);
}
function draw(){
  image(video,0,0,350,300);
  classifier.classify(video,gotResults);
}
function modelLoaded(){
  console.log("Model Loaded !!");
}
function gotResults(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}
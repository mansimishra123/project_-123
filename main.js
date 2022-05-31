function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses)
}
 function modelloaded(){
     console.log("poseNet is Initialized")
 }


function draw(){
    background("cyan")
}
 
function gotPoses(result){

    if(result.length>0){
        console.log(result)
    }
}
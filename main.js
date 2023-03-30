noseX=0;
noseY=0;
differce=0;
rightX=0;
leftX=0;

function preload(){

}
function setup(){
 canvas=createCanvas(400,400);
 canvas.position (900,300);
 webcam=createCapture(VIDEO);
 webcam.size(400,400);
 webcam.position(300,300);

 poseNet=ml5.poseNet(webcam,modelLoaded);
 poseNet.on("pose",gotPoses);

}
function draw(){
 document.getElementById("s1").innerHTML = differce + "px";
 fill("aqua")
 stroke("brown");
 square(noseX,noseY,differce);
}

function modelLoaded(){
    console.log("model loaded succesfully")
}

function gotPoses(results){
        if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;

            leftX=results[0].pose.leftWrist.x;
            rightX=results[0].pose.rightWrist.x;
            differce = Math.floor(leftX-rightX);
        
 
        }
        else{
            console.log("code has errors")
        }

   

    
}
noseX = 0;
noseY = 0;
difference=0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,450);
    canvas.position(590,130);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#00ffff');
    document.getElementById("text_side").innerHTML = "Width and Height of the text will be = "+difference+"px";
    textSize(difference);
    text("Peter",noseX,noseY);
}

function modelLoaded(){
    console.log('PoseNet is Intialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = "+leftWristX+"right wrist x = "+rightWristX+"difference"+difference);
    }
}


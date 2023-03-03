
    function preload(){
        mustache=loadImage('https://i.postimg.cc/ydBGQMyX/R-1.png');
    }
    noseX=0;
    noseY=0;

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+ results[0].pose.nose.x);
        console.log("nose y= "+ results[0].pose.nose.y);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;

    }
}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0,0,500,500);
    image(mustache,noseX,noseY,50,50)
}
function take_snapshot(){
    save('something_even_more_special.png');
}
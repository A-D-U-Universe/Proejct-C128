song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function gotPoses() {
    if (results.length > 0) {
        console.log(result);
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.righttWristX;
        rightWristY = results[0].pose.rightWristY;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function modelLoaded() {
    console.log("model is loaded!");
}

function preload() {
    song1 = loadSound("avengers song.mp3");
    song2 = loadSound("shield song.mp3");

}

function draw() {
    image(video, 0, 0, 600, 500);

}

function play() {
    song1.play();
    song2.play();
    song.rate(1);
    song.setVolume(1);
}
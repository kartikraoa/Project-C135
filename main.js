difference=0;
reightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#6C91C2');

    document.getElementById("font_size").innerHTML="Font size of the text will be = "+difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Kartik',50,400);
}
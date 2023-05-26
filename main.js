
difference=0;
rightWristX=0;
leftWristX=0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550,500 );
    canvas = createCanvas(550, 500);
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded() {
    console.log("modelo iniciado")
}
function gotPoses(results) {
    if (results.leght > 0) {
        console.log(results)
    }
}
function draw() {
    background("red")
    document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference +"px";
}


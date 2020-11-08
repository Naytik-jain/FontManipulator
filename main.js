    function preload(){

    }
    function setup(){
     canvas=createCanvas(500,600);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(500,500);
     poseNet=ml5.poseNet(video ,modelLoaded);
     poseNet.on('pose', GetResult);
    }
    function modelLoaded(){
        console.log("PoseNet is initialized");
    }
    function draw(){
        background('#FF6666');
        fill( '#FF0000');
        stroke('#800000');
    }
    function GetResult(results){
        if(results.length>0){
           console.log(results);
        }
        else
        {

        }
    }

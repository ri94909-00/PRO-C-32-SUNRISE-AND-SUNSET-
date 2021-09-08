const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";
var bg2 ="sunset.png"; 

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    

}

async function getBackgroundImg(){

    async function getbackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        console.log(responseJSON);
        
        var dateTime = responseJSON.datetime;
        var hour =dateTime.slice(11,13)
        console.log(dateTime);
        
        if(hour>=12){
            text("Time : "+ hour%12 + " PM", 50,100);
        }else if(hour==0){
            text("Time : 12 AM",100,100);
        }else{
            text("Time : "+ hour%12 + " AM", 50,100);
        }
    
        
        
    backgroundImg = loadImage(bg);
}
}

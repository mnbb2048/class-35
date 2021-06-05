var ball;
var database
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/position')
    ballPosition.on("value",reposition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref ('ball/position').set({
       'x':position.x+x,
       'y':position.y+y
    })
   
}
function reposition(data){
 position=data.val();
 ball.x=position.x
 ball.y=position.y   
}
function showError(){
    console.log("there is an error related to the position")
}
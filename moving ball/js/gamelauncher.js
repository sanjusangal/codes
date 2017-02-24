var myHitSound;
var myMissSound;
var enterLevel;
var winStatus;
function preload()
{
    myMissSound=loadSound('assets/eatghost.wav');
    myHitSound = loadSound('assets/woosh.wav');    
}


function setup()
{
    createCanvas(500, 500);
    levelStatus();   
    //frameRate(3);
   // background('black');
    entryLevel();
    //entryMode();
     prepareBalls();
       // levelStatus();
    //entryLevel();
   
  // var a= "setTimeout(gameTimer,500);"
    gameTimer();
    gameSpeed=createSlider(1,10,1,2);
 
    
  
    
    
}
function draw()
{
    
    background('black');
    
    printBalls();
    fill('red');
    textSize(18);
    text("Score Hits:" + hits + " Score Miss:" + miss + " Time Left:" + timeLeft ,10,30);

    isTimeEnd();
    levelStatus();
    speed=gameSpeed.value();
    document.getElementById("currentSpeed").innerHTML=speed;
    
    
    
}
function mousePressed()
{
    isHit = 0;
    for(var i=0; i<balls.length; i++)
        {
            balls[i].ballClicked(i);
            
        }  
    //miss ++;
    
    if(isHit == 0)
    {
        miss++;            
        myMissSound.play();
        //isHit=false;
    }
            

}
var timeOut;
var myTimer;
function gameTimer()
{
    
    myTimer=setInterval(function(){
                         timeLeft --;
                         
                         },3000);
//    timeOut=setTimeout(function()
//                      {
//        fill('red');
//    textSize(30);
//    text("game over", 100,100);
//        
//    },1000);
    
    
}

var gameStatus="Game Over";
function isTimeEnd()
{
    
    if(timeLeft<=0)
        {
            clearInterval(myTimer);
            //balls.splice(0,balls.length);
            balls=[];
            background('black');
            var x=((width/2)-((gameStatus.length*19)/2));
            if(balls.length==0)
                {
                     fill('red');
                    textSize(50);
                    text(gameStatus,x,(height/2));
                    
                }
           else{
               
           }
                                    
        }
}
var count=0;
function entryLevel()
{
    
     var enterLevel=prompt("Please enter the level \n 1.Beginner \n 2. Intermediate \n 3. Expert",1);
    if(enterLevel==1)
        {
           count=30;
            speed=1; 
            timeLeft=60;

        }
    else if(enterLevel==2)
        {
            count=10;
            speed=4; 
            timeLeft=30;
        }
    else if(enterLevel==3)
        {
            count=5;
            speed=7;
            timeLeft=10;
        }
    
    else{
        alert("Please enter the correct level number");
        };
}
    

/*function bg1()
{
    
function bg2()
{
   
}
function bg3()
{
    
}
var button1; var button2; var button3;
function entryMode()
{
    background('black');
    button1 = createButton('Beginner');
  button1.position(100,100);    
  button1.mousePressed(bg1);
    
    button2= createButton('intermediate');
    button2.position(100,200);    
  button2.mousePressed(bg2);
    
     button3= createButton('expert');
    button3.position(100,300);    
  button3.mousePressed(bg3);
    
    
}
function modeClicked()
{
    dist(mouseX,mouseY,50,150);
}*/

function prepareBalls(){
   // var count=0;
    
  for(var i=1; i<=count; i++)
        {
            var ball=new Ball(random(width),random(height));
            balls.push(ball);
            
        }
}
function printBalls(){
    for(var i=0; i<balls.length; i++)
        {
            fill(balls[i].color);
            balls[i].move();
            ellipse(balls[i].x,balls[i].y,balls[i].width,balls[i].height);
        }
}

function levelStatus()
{    
    if(timeLeft>0 && balls.length==0){
        background('black');
        winStatus = "You Win the Game";
        fill('red');        
        text(winStatus,210,250);
    }
}
   /* else{
        winStatus = "You Lose the Game";
        fill('red');        
        text(winStatus,210,250);
    }*/

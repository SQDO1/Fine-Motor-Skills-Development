

function setup() {
  createCanvas(480, 880);
  background(80);
  startingx = 240;
  startingy = 700;
  diameter = 60;
  x = 1;
  score = 0;
  bar = 500
  start = false;
}

function draw() {
  background(80);
  
  
  fill('blue');
  stroke('black');
  strokeWeight(5)
  rect(50,200,40,500)
  
  
  noStroke()
  fill(80)
  rect(51,200,38,bar)
  
  
  if(start)
    bar = bar - .5;
  
  if(bar <= 0)
     setTimeout(function(){ setup(); }, 1000);
  
  
  
  
  
  
  //score
  fill('white');
  text("Score: " + score, 330,60)
  
  
  
  //Border
  noFill();
  stroke('white');
  strokeWeight(4);
  rect(10,10,460,860);
  
  //back box
  strokeWeight(6);
  stroke('red');
  rect(20,20,160,75);
  
  //back 
  fill('red');
  strokeWeight(1);
  textSize(50);
  text("BACK",30,75);
  

  
  //thumb circle
  
  noFill();
  strokeWeight(5);
  stroke('white');
  circle(80,800,100);
  strokeWeight(1);
  text("\uD83D\uDC4D",50,810);
  
  //blue bar
  fill('blue');
  noStroke();
  rect(235,200,10,500)
  strokeWeight(3);
  stroke('black');
  
  
  
  //circle stuff
  
  
  
  
    
  circle(startingx,startingy,diameter);
  //circle(240,200,60);
  noStroke()
  triangle(240,180,210,220,270,220);
  
  
  
  
    
    
    switch(x){
  
      case 1:
        fill('Blue');
        strokeWeight(3);
        textSize(30);
        text("Pointer Finger", 145,130);
        
        if(startingy <= 210){
          x++;
          startingy = 700;
          score++;
        }
        
        break;
        
      case 2:
        fill('blue');
        strokeWeight(3);
        textSize(30);
        text("Middle Finger", 145,130);
        if(startingy <= 210){
          x++;
          startingy = 700;
          score++
        }
        
        break;
        
      case 3:
        fill('blue');
        strokeWeight(3);
        textSize(30);
        text("Ring Finger", 145,130);
        if(startingy <= 210){
          x++;
          startingy = 700;
          score++
        }
        
        break;
        
      case 4:
        fill('blue');
        strokeWeight(3);
        textSize(30);
        text("Pinky Finger", 145,130);
        //print(startingy)
        
        if(startingy <= 210){
          x = 1;
          startingy = 700;
          score++
        }
        
        break;

      default:
        x = 1;
        fill('blue');
        strokeWeight(2);
        textSize(30);
        text("error", 200,100)
       
        break;
  
  }

}




function mouseDragged(){  
  
    if(startingy <= 700 && startingy >=210){
      if(mouseX > startingx - diameter/2 && mouseX < startingx + diameter/2){
        if(mouseY > startingy - diameter/2 && mouseY < startingy + diameter/2){

            stroke('black');
            circle(startingx, mouseY, diameter); 

            startingy = mouseY;
          



      }
      }
    
    }
  
  
    else if(startingy >= 710){
      startingy = 700;
    }
  
    else{
      startingy = 700;
      x++;}
}
  //rect(20,20,160,75);
function mousePressed(){
  if (mouseX >= 20 && mouseX <= 180)
    if(mouseY >= 20 && mouseY <= 95)
      window.open("https://editor.p5js.org/kmrobb1/present/MGDtpRCs8");
  
  
   if (mouseX >= 10 && mouseX <= 120)
    if(mouseY >= 780 && mouseY <= 860)
      start = true;
  
  
  
}








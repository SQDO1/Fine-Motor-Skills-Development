score = 0;
a = 1

function setup(){
  createCanvas(480,880)
  
  
    tiles=
  [
  tile1 = new Tile3(40,200,'white'),
  tile2 = new Tile3(140,200,'white'),
  tile3 = new Tile3(240,200,'white'),
  tile4 = new Tile3(340,200,'white'),
  tile5 = new Tile3(40,300,'white'),
  tile6 = new Tile3(140,300,'white'),
  tile7 = new Tile3(240,300,'white'),
  tile8 = new Tile3(340,300,'white'),
  tile9 = new Tile3(40,400,'white'),
  tile10 = new Tile3(140,400,'white'),
  tile11 = new Tile3(240,400,'white'),
  tile12 = new Tile3(340,400,'white'),
  tile13 = new Tile3(40,500,'white'),
  tile14 = new Tile3(140,500,'white'),
  tile15 = new Tile3(240,500,'white'),
  tile16 = new Tile3(340,500,'white')
  ]
  
      for (var i = 0; i<4; i++){
      num = Math.floor(Math.random() * 15) + 1  
      tiles[num].tileColor = 'blue';
      tiles[num].correctTile = true;
      }
      
        
        
        
        
      
  
  
  
  
  
}

function draw(){
  background(80);
  fill('white')
  textSize(40)
  text("Score: " + score, 160,140)
  
    //back box
  noFill()
  strokeWeight(6);
  stroke('red');
  rect(20,20,160,75);
  
  //back 
  fill('red');
  strokeWeight(1);
  textSize(50);
  text("BACK",30,75);
  
  
  stroke('black')
  
  
  var i = 0;
  for(i = 0; i < 16; i++){
    tiles[i].drawTile();
    
    
    
  }
  
  if (score == 4 && a == 1){
    a = 0
    setTimeout(function(){ setup(); }, 1000); }
  
  else if (score == 8 && a == 0){
    a = 1
    setTimeout(function(){ setup(); }, 1000);
  }
  else if (score == 12 && a == 1) {
    a = 0
    setTimeout(function(){ setup(); }, 1000);
  }
  
}


  function mousePressed(){
    
    if (mouseX >= 20 && mouseX <= 180)
    if(mouseY >= 20 && mouseY <= 95)
      window.open("https://editor.p5js.org/kmrobb1/present/MGDtpRCs8");
    
    
    
    
    for(var j = 0; j < 16; j++){
      if(mouseX >= tiles[j].getX() && mouseX <= tiles[j].getX()+100){
        if(mouseY >= tiles[j].getY() && mouseY <= tiles[j].getY()+100){
          print(tiles[j].correctTile)
          
          if(tiles[j].correctTile){
            tiles[j].tileColor = 'yellow';
            score++;}
            
          else{
            tiles[j].tileColor = 'red';
            setTimeout(function(){ setup(); }, 1000);
            score = 0;}
          
          
        }
          
    }
    
  }
  
}



    

    
    
    
    



  
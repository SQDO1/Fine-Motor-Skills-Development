class Tile3{
  
  
  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = 'white';
    this.correctBool = false;
  }
  
  get tileColor(){
    return this.color;
  }
  
  set tileColor(newColor){
    this.color = newColor;
  }
  
  get correctTile(){
    return this.correctBool
  }
  
  set correctTile(newBool){
    this.correctBool = newBool;
  }
  
  
  
  
  drawTile(){
    
  
  fill(this.color)  
  rect(this.x,this.y,100,100)   
  }
  
  
  getX(){
    return this.x
  }

  getY(){
  return this.y
}  
  
  setColor(col){
  this.color = col
}  
  
}



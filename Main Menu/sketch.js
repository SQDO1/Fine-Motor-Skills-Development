function setup() {
  createCanvas(480, 880);
}

function draw() {
  background(80);
  noFill();
  stroke('red')
  strokeWeight(6)
  rect(80,220,300,80)
  
  textSize(40)
  
  rect(80,320,300,80)
  rect(80,420,300,80)
  stroke(0)
  strokeWeight(1)
  fill(0)
  text("Excercise One",100,275)
  text("Excercise Two", 100, 375)
  text("Excercise Three", 85, 475)
}

function mouseClicked(){
  if (mouseX >= 80 && mouseX <= 380)
    if(mouseY >= 220&& mouseY <= 300)
      window.open("https://editor.p5js.org/kmrobb1/present/7PQiTYZcC")
  
  if (mouseX>= 80 && mouseX <= 380)
    if (mouseY >= 320 && mouseY <= 400)
        window.open("https://editor.p5js.org/kmrobb1/present/ttXGXAOlf")
  
  if (mouseX >= 80 && mouseX <= 380)
    if(mouseY >= 420 && mouseY <=500)
      window.open("https://editor.p5js.org/kmrobb1/present/lJNFCJnsm")
      
  
}
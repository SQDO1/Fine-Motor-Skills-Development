const SIZE = 175; 

var pattern = []; 
var tiles = [];
var input = []; 

var time;
var Index; 

var score; 

var demo; 
var playing; 


function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {


      var c = randomTileColor(i, j);
      var highlight = Highlight(c);

			var x = i * SIZE + SIZE;
			var y = j * SIZE + SIZE;

      tiles.push(new Tile(x, y, SIZE, c, highlight));
    }
  }

  playing = true;
  score = -1;
  newTile();

  textAlign(CENTER,TOP);
}




function draw() { //DRAWS EVERYTHING IN THE GAME
  background(51);

  Tiles();
	Demonstration();

  drawScore();

  if (!playing)
		drawGameEnd();
  
  
  fill('red');
  strokeWeight(2);
  stroke('red');
  textSize(30);
  text("BACK",60,20);
  noFill();
  strokeWeight(4)
  rect(10, 10, 100,50);
  
  
  
  
}


function mousePressed() {

  if (demo) 
    return;

  var t = getTile(tiles, mouseX, mouseY); 

  if (t != -1) 
    input.push(t);

  for (var i = 0; i < input.length; i++) {
    if (input[i] != pattern[i])
      endGame();
  }

	
  if (input.length === pattern.length) 
    newTile();
  
  if(mouseY>= 10 && mouseY <= 60)
    if (mouseX >= 10 && mouseX <= 110)
      window.open("https://editor.p5js.org/kmrobb1/present/MGDtpRCs8")
  
  
  
  
  
}


function newTile() {

  pattern.push(Math.floor(random() * tiles.length));

	demo = true;

	var negativeInput = (-input[input.length - 1]) ? -input[input.length - 1] : 1; // find 1's complement
	Index = negativeInput - 1; 
	time = 0; 

	input = []; 

	score++;
}

function endGame() { // dictates weather the game has ended or not.

  playing =false;
noLoop();
    

}


function drawGameEnd() { // creates the message of game over.

  textSize(50);
  fill(255);
  text("Game Over!", width / 2, height - 360);
}


function drawScore() { // creates the score counter

	textSize(30);
	fill(255);
	text("score: "+ score, width / 2, height - 450);
}


function Tiles() { // CREATE THE TILES 

	for (var i = 0; i < tiles.length; i++) {

    if (demo && Index > -1) {

      tiles[i].draw(i === pattern[Index]); 
    } else if (demo) {

			tiles[i].draw(i === (-Index - 1)); 
		} else {

      tiles[i].draw(i === input[input.length - 1]); 
    }
  }
}


function Demonstration() { // CREATES THE PATTERN FOR THE GAME

	time++;

  if (demo && time % 60 === 0) { 

		if (Index > -1) {

			Index++; 
		} else if (Index === (-tiles.length - 1)) {

			Index = 0; 
		} else {

			Index = (-tiles.length - 1); 
		}
	}

  if (Index >= pattern.length) {
		

    demo= false;
  }
}


function randomTileColor(i, j) { // CREATES THE COLOR CHANGE FOR PATTERN

	var red = (i % 2 === 0) ? 0 : random(155) + 30;
	var green = (j % 2 === 0) ? 0 : random(155) + 30;
	var blue = random(155) + 30;

	return color(red, green, blue);
}


function Highlight(c) { // RETURN THE DIFFRENT COLOR PATTERN

	return color(red(c) +200, green(c) + 200, blue(c) + 200);
}
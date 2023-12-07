function Tile(x, y, size, col, brightC) {

  this.x = x;
  this.y = y;

  this.size = size;

  this.col = col; // color
  this.brightC = brightC; // bright color
}


Tile.prototype.draw = function(lit) {

  noStroke();
  fill((lit) ? this.brightC : this.col);

 rect(this.x-100, this.y-100, (lit) ? this.size  : this.size);
}


Tile.prototype.inBounds = function(x, y) {

  var d = dist(x, y, this.x, this.y);

  return (d < this.size / 2);
}


function getTile(tiles, x, y) {

  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].inBounds(x, y)) {
      return i;
    }
  }

  return -1;
}
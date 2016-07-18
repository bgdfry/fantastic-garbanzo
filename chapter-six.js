// Problem 1

function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus(second){
  return new Vector(this.x + second.x, this.y + second.y);
}

Vector.prototype.minus(second){
  return new Vector(this.x - second.x, this.y - second.y);
}

// Didn't know how to set this part up
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});


// Problem 2
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

// Messed up the min width/height portions on this and had to look at answer

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};


 // Problem 3.....no idea

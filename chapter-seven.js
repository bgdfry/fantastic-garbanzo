// Problem 1 - Smart Plant Eater

function SmartPlantEater() {
  this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy >= 90 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant && this.energy >= 90)
    return {type: "move", direction: space};
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

// Problem 2 - didn't figure out how to make this work completely
function SmartPlantEater() {
  this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy >= 90 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant && this.energy >= 90)
    return {type: "move", direction: space};
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

// Tiger

function Tiger() {
  this.energy = 20;
}

Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy >= 60 && space)
    return {type: "reproduce", direction: space};
  var herbivore = view.find("O");
   var plant = view.find("*");
  if (herbivore && this.energy >= 60)
    return {type: "move", direction: space};
  if (herbivore)
    return {type: "eat", direction: herbivore};
   if (herbivore > 6)
    return {type: "eat", direction: herbivore};
  if (space)
    return {type: "move", direction: space};
  if (plant)
    return {type: "move", direction: space};
};

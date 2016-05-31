var liter = function(gallon) {
  return gallon / 0.26417;
}

var gallon = parseInt(prompt("Enter an amount of gallons:"));
var result = liter(gallon);
alert(result);

var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
var two = 2
  return (n + two)

  // Feel free to move things around!
 
}
<<<<<<< HEAD
var funkyFunction = function()
{return function() {
    return "FUNKY!"}
=======
var theFunk = funkyFunction()
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
>>>>>>> d3fe917e35c15871de775ebb5982518cbd485f1f
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

<<<<<<< HEAD
var theFunk = funkyFunction();
theFunk(); 

=======
theFunk = funkyFunction()
>>>>>>> d3fe917e35c15871de775ebb5982518cbd485f1f

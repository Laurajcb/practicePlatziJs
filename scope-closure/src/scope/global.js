// variables
var a; // declaration 
var a = "a"; //  Re-declaration 
var b = "b";  // Asigantion 
b = "bb"; // Re-asignation 

// Global scope
var fruit = 'apple';
function showFruit() {
  console.log(fruit);
}

showFruit();

function countries() {
  country = 'Colombia'; //Global declaration !!
  console.log(country);
}

countries();
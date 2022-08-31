// Declaration Assignation and re Declaration and re asignation with var 

var firstName;
firstName = 'Oscar';
console.log(firstName);

var lastName = 'Callejas';
lastName = 'Beltran';
console.log(lastName);


var secondName = 'David';
secondName = 'Yesid';
console.log(secondName);

// Declaration Assignation and re Declaration and re asignation with let

let fruit = 'Apple'; //Declare and initialization 
fruit = 'Kiwi';

let fruit = 'Banana'; // You CAN'T NOT RE assign
console.log(fruit); // SyntaxError: Identifier '' has already been declared

// Declaration Assignation and re Declaration and re asignation with const 

const animal = 'Dog';
animal = 'Cat';
console.log(animal);// TypeError: Assignment to constant variable.

// Array reference, (we can use push or pop in order to modify the reference to the array)

const vehicles = [];
vehicles.push('Car');
console.log(vehicles);

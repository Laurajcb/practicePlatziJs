// Hoisting

console.log(nameOfDog); // Here js declare the var name of dog in this way var nameOfDog; by default is undefined
var nameOfDog = 'Rex';
console.log(nameOfDog);



function dogName() {
    console.log(`The dog name is ${nameOfDog}`);
}
var nameOfDog = 'Rex';
dogName();

// output : The dog name is Rex
// this occur bc the var of the line 12 is elevated in order to get the value 
// if we just declare nameOfDog the value will be undefined

nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); };
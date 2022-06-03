// Function that calculates some mesures of square
console.group("square");

function squarePerimeter(side) {
    return perimeter = side * 4;
};

function squareArea(side) {
    return result = side * side;
}

console.groupEnd();

// Function that calculates some mesures of triangle
console.group("Triangle");

function trianglePerimeter(triangleSide1, triangleSide2, triangleBase){
    return result = triangleSide1 + triangleSide2 + triangleBase;
};

function  areaTriangle(triangleBase, triangleHeight) {
    return result = (triangleBase * triangleHeight)/2
};

console.groupEnd();

//Function that calculates some mesures of circle
console.group('circle');

function diametercircle(radio){
    return result = radio * 2;
};

//PI
const PI = Math.PI;

// circunferencia 
function perimeterCircle(radio) {
    const  diametro = diametercircle(radio);
    return diametro * PI;
}

//circle area
function areaCircle(radioCircle) {
 return (radioCircle **2) * PI   
};

console.groupEnd();
// Here we integrates with HTML
function calculateSquarePerimeter() {
const input = document.getElementById('inputSquare');
const value = input.value;

const perimeter = squarePerimeter(value);
alert(perimeter);

};

function calculateSquareArea() {
    const input =  document.getElementById('inputSquare');
    const value = input.value;

    const area = squareArea(value);
    alert(area);
};

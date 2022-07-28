/* In the following code we can see that through the method
    querySlector retrives the element from the DOM using the CSS
    selector, with this yoy can rewrite a tag data, get the attribute value, 
    set and attribute value, add or remove class names with help of other methods
    (innerHTML, setAttribute, innerText) etc
*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#first-digit');
const input2 = document.querySelector('#second-digit');
const btn = document.querySelector('#calculate-btn');
const p = document.querySelector('#result');


// here the paremeters are the 'event' to listend and the function name 
// alert: do NOT use () in the function by defoult addEventListener do it 
form.addEventListener('submit', addInputValues);

/*
this function is an example of how to use it calling the fuction 
from html on the onclick="buttonOnclick()" alert always with ()  property
*/

function addInputValues(event) {
  event.preventDefault();

  let digit1 = parseInt(input1.value);
  let digit2 = parseInt(input2.value);
  let result = digit1 + digit2;

  p.innerHTML = `Result: ${result}`
}




const numb = 24;
const string = 'Hello';
const bool = true;
const nul =  null; 
undefined;
const float = 234.4;


console.log(string[0]);

const newString = string.split(""); // ["H", "e", "l", "l", "o"]
console.log(newString);

const str = "Hola soy Julian";
const splited = str.split(" "); // ["Hola", "soy", "Julian", "..."]

const join = splited[0] + splited[1] + splited[2]; // ✅;
const join2 = `${splited[0]} ${splited[1]} ${splited[2]}`; // Middle / Senior

function joinElements(arr) {
  let joined = '';

  for (i = 0; i > arr.length; i++) {
    joined += arr[i] + ' '; // ... + "Hola ";
  }
  
  return joined;
}
const join3 = 
//let array = ["Hola", "soy", "Julian", "..."];
//joinElements(array);

// ALL the elements in splited joined by blank space
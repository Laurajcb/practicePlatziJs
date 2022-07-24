# Javascript Test 

## Variables and operations 

- 1️⃣ Answer the following questions:
* What is a variable and what is it for?

A: A variable is a space in memory that allows us to store data, in javascript we have 3 ways
to do it: var, let, and const, they have different scopes, which means they have different accessibility,
also functions and data structures

* What is the difference between declaring and initializing a variable?

A: When we initialize a variable, we give it a name and assign it a value.
- let number; // Declaring a variable
- let number = 12; //Initializing a variable

* What is the difference between adding numbers and concatenating strings?

A: The difference is that when we add numbers we're doing a math operation, but when 
we concatenate strings we are adding more characters to the current string :
```
let addition = 2 + 2; // Here the result is 4 
let concatenation = "4" + addition  // Here the result is 44, Cause the first 4 is from the character 4 
                                      //and the second is form the actual math operation.
```

* Which operator allows me to add or concatenate?

A: The plus sing + .

- 2️⃣ Determine the name and data type to store the following information in variables
- 3️⃣ Translate the example variables into JavaScript code:

* Name- string               
* LastName- string           
* Username in Platzi- string 
* Age- number                
* Email- string              
* Adult- Boolean             
* Saved money- number        
* Debts- number         

A:
```
const name = "Laura"; .
const lastName = "Callejas"; 
const PlatziUserName = "Laura Callejas B"; 
let age = 26; 
const email = "callejaslaura96@mail.com"; 
const IsAdult = true;
let savings = 500; 
let debts = 50; 


```

- 4️⃣ Calculate and print the following variables from the variables of the previous example:

* Full name (name and lastName):
A: 
```
const name = "Laura";
const lastName = "Callejas";
const fullName = `My full name is: ${name} ${lastName}`;
console.log(fullName);
//You will see on the console: My full name is: Laura Callejas
```

* Current money (Saved money less Debts):
A:
```
let savings = 500;
let debts = 50;
let total = savings - debts
const currentMoneyAmount = `The total amount of my money is: ${total}`;
console.log(currentMoneyAmount);
//You will see on the console: The total amount of my money is: 450
```

# Functions 

- 1️⃣ Answer the following questions in the comments section:
* What is a function?

A: Is a set of lines of code (code block) that are responsible for solving a specific task
it can return or not data.

* When is it useful for me to use a function in my code?

A: When you need to repeat an action multiple times, the common example is when you want to add 2 numbers, 
you create a function that receives as a parameters two numbers and returns or prints the result, so every time you need to do 
this action you should call the function and  just worri for the numbers you want to add and voila ! you get the result. 

* What is the difference between parameters and arguments of a function?

A: when we declare a function we define the parameters that we going to need in order to do whatever task we need to do E.g.

```
function addition (a, b){
    return a + b;
};// Here a and b are the parameters

```
but when we call the function addition we passed two areguments E.g. 
```
addition(4, 7); // Here we give it two arguments in this case 4 and 7;  
```

- 2️⃣ Convert the following code into a function, but,changing when necessary the constant variables
for parameters and arguments in a function:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

A:

```
function nameNickname(name, lastName, nickname){
    const completeName = name + ' ' +lastName;
    console.log(`My name is ${completeName}, but I prefer you call me ${nickname}.`);
};
nameNickname("Juan David", "Castro Gallego", "juandc");

// output in console: 
//My name is Juan David Castro Gallego, but I prefer you call me juandc.
```

# Conditionals

- 1️⃣ Answer the following questions in the comments section:

*What is a conditional?

A: is an statement that evaluates if a condition is one option or another one E.g.

```
// Let's see if Tom and Marie can enter to a club 
let tomAge = 18;
let marieAge = 22;

function isAdult(age){
    if(age >= 21){
        console.log("You're an adult you can enter.");
    } else{
        console.log("You're not old enough, you can not enter.");
    }
} 
isAdult(tomAge);    //The output in the console will be:
                    //You're not old enough, you can not enter
isAdult(marieAge);  //The output in the console will be:
                    //You're an adult you can enter.             
// Here we can tell when the condition is true or not. 

```

* What types of conditionals exist in JavaScript and what are their differences?
A: we have if/esle, switch

* Can I combine functions and conditionals?

A: Sure we can use conditionals inside of functions, and we can call a function if a conditional is true or false 
depent on what you wnat to do


- 2️⃣ Replicate the behavior of the following code that uses the switch statement using if, else and else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}
```

```
function subscriptionType(typeSubscription){
  if(typeSubscription === "Free") {
    return "Solo puedes tomar los cursos gratis";

  } else if(typeSubscription === "Basic") {
    return "Puedes tomar casi todos los cursos de Platzi durante un mes";

  } else if(typeSubscription === "Expert") {
    return "Puedes tomar casi todos los cursos de Platzi durante un año";
    
  } else{
    return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
  }
} 
const tomSubscription = subscriptionType("Basic");
console.log(tomSubscription); // console output: Puedes tomar casi todos los cursos de Platzi durante un mes
```

```
//Here solution with one conditional:
const subscriptions = [
  { name: "Free", benefits: "Solo puedes tomar los cursos gratis" },
  { name: "Basic", benefits: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
  { name: "Expert", benefits: "Puedes tomar casi todos los cursos de Platzi durante un año" },
  { name: "ExpertPlus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" },
]

function subscBenefits(userSubscription) {
  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].name === userSubscription) {
      return subscriptions[i].benefits;
    }
  }
  return "Enter a rigth subscription";
}
let tomSubscription = "Basic";
let result = subscBenefits(tomSubscription);
console.log(result);//output console: Puedes tomar casi todos los cursos de Platzi durante un mes
```

```
//2 solution 
const subscriptions = [
  { name: "Free", benefits: "Solo puedes tomar los cursos gratis" },
  { name: "Basic", benefits: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
  { name: "Expert", benefits: "Puedes tomar casi todos los cursos de Platzi durante un año" },
  { name: "ExpertPlus", benefits: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" },
]
function subscBenefits(userSubscription) {
  const benefit = subscriptions => subscriptions.name === userSubscription;
  const result = subscriptions.find(benefit)
  if (!result) {
    return "Type a valid subscription";
  }
  return result.benefits;
};

let tomSubscription = "noAvalidSubsc";
let result = subscBenefits(tomSubscription);

console.log(result);
// console output: Type a valid subscription
``` 
# Loops 
- 1️⃣ Answer the following questions in the comments section:

* What is a loop?
A: Is an action or sequence of actions that wa can repeat until a certain 
  condition is reached.

* What types of loops exist in JavaScript?
A: for, for/in , for/ of,while, do/while.

* What is an infinite loop and why is it a problem?
A: An infinite loop is when we have a action that is repeating being repeated until
the condition is not reached, E.g:

```
function acumulator(number) {
  for (let i = 10; i < 5; i++){ //Here 10 is < 5, is false, therefore the condition 
    number += 1;                // is never reached and the loop continues running 
  }                             //Cause there is  nothing that indecates to stop 
  return number;
}
let result = acumulator(25);
console.log(result);// infinite loop 
```

* Can I mix loops and conditionals?
A: we can use them together.

- 2️⃣ Replicate the behavior of the following for loops using while loops:

```
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
```

A: 

```
let i = 0;
while(i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
```

A: 
```
let i = 10;
while(i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
```


- 3️⃣ Write some JavaScript code that asks users what 2 + 2 is. If they get it right, we display a congratulations message, but if they get it wrong, we start over.
💡 Hint: You can use the JavaScript prompt function.

A:
```
let result = window.prompt("let's do some math, How much is 2 + 2");
if (result == 4) {
  alert("Great job!");
}else {
  alert("Try again");
};

``` 

# List

- 1️⃣ Answer the following questions in the comments section:

* What is an array?
A: is a set of data represented as follows:
const arrayNames = ["marie", "pool", "juan", "pepito"];

* What is an object?

A: is a set of data in the way key: "value", represented as follows:

```
const objectStudent= {
  name: "Juan",
  LastName "Castro"
  age: 23,
};
```

* When is it better to use objects or arrays?
A: You use objects when you need to be more specific and you need to store in structure multiples properties
and you use an  array when is a set of one property.

* Can I mix arrays with objects or even objects with arrays?
A: yes, you can create an array of objects and have objects with arrays as a properties

- 2️⃣ Create a function that can receive any array as a parameter and print its first element.

```
const arrayNames = ["marie", "pool", "juan", "pepito"];
function elementPrint (array) {
  let firstElem = array.shift();
  return firstElem;
}

const result = elementPrint(arrayNames);
console.log(result); // output : marie
```

- 3️⃣ Create a function that can receive any array as a parameter and print all its elements one by one 
(it is not worth printing the entire array).

```
const arrayNames = ["marie", "pool", "juan", "pepito"];
function elementPrints (array) {
  let elemts = array;
  return firstElem;
}

const result = elementPrint(arrayNames);
console.log(result);


```
- 4️⃣ Create a function that can receive any object as a parameter and print all its elements one by one 
(it is not worth printing the entire object).

A: 
```
const numbers  = [1, 2, 3, 4];

numbers.forEach(gimmeTheNumber);

function gimmeTheNumber(number){
  console.log(number);
}
/*
Console output: 1
                2
                3
                4
*/
```

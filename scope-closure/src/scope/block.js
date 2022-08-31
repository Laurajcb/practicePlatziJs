function fruits() {
  if (true) {
    var fruit = 'Apple';//Funtion Scope
    let fruit2 = 'kiwi'; // Block scope
    const fruit3 = 'Banana';  // Block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit);
  console.log(fruit2); //ReferenceError: fruit2 is not defined
  console.log(fruit3); // bc this is variable es block scope and this conse.log is in fuction scope
}

fruits();


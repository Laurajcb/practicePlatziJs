function fruits() {
  if (true) {
    var fruit = 'Apple';//Funtion Scope
    let fruit2 = 'kiwi'; // Block scope
    const fruit3 = 'Banana';  // Block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit);

}

fruits();
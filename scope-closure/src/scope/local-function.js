function greeting() {
  let userName = 'Ana';
  console.log(userName);
  if (userName === 'Ana') {
    console.log(`Hi ${userName}!!`);
  }
}

let userName = 'Maria';// here is no posible do this bc is no global scope
greeting();
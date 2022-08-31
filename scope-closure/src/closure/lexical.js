const myGlobal = 0;

function myFunction() {
  const numb = 1;
  console.log(myGlobal);
  function parent() { // Inner function
    const inner = 2;
    console.log(numb, myGlobal);
    function child() {
      console.log(inner,numb, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();
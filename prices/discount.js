// Function that calculates total price to pay with discount
function totalPriceWithDiscount(price, discount) {
  const discountedPricePercentage = 100 - discount;
  const priceWithDiscount = (price * discountedPricePercentage) / 100;

  return priceWithDiscount;
}

//functions that calculates the discount depent of the input
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  let discountValueC = discountValue

  const inputCupon = document.getElementById("inputCupon");
  const cuponValue = inputCupon.value;
  
  const cupons = ['gold', 'silver', 'diamond'];

  if (cuponValue.toLowerCase() === cupons[0]) {
    discountValueC = 20;
  } else if (cuponValue.toLowerCase() === cupons[1]) {
    discountValueC = 15;
  } else {
    discountValueC = 30;
  };

    const priceWithDiscount = totalPriceWithDiscount(priceValue, discountValueC);
  

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "The price with discount is: $" + priceWithDiscount;
}

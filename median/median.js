const list1 = [100, 200, 500, 400000000];

const halfList1 = parseInt(list1.length / 2);

function isEven(int) {
  if (int % 2 === 0) {
    return true;
  } else {
    false;
  }
}

function averageCalculation(list) {

  const sumList = list.reduce(function (acumulatedValue = 0, newElement) {
    return (acumulatedValue = newElement);
  });

  let totalAverage = sumList / list.length;
  return totalAverage;
}


let median = 0;
if (isEven(list1.length)) {
  const element1 = list1[halfList1 - 1]
  const element2 = list1[halfList1]
  medianE1yE2 = averageCalculation([
    element1, element2
  ])
  median = medianE1yE2

} else {
  median = list1[halfList1]
}

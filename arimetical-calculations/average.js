function averageCalculation(list) {
  /*let sumList = 0;
  for (let i = 0; i < list.length; i++) {
    sumList = sumList + list[i];
  }
  */
  const sumList = list.reduce(function (acumulatedValue = 0, newElement) {
    return (acumulatedValue + newElement);
  });

  let totalAverage = sumList / list.length;
  console.log(totalAverage);
}

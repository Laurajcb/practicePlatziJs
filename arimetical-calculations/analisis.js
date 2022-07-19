const colSalaries = colombia.map(
  function (person) {
    return person.salary;
  }
);

const sortedColSalary = colSalaries.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

function isEven(num) {
  return num % 2 === 0
};

function averageCalculation(list) {
  const sumList = list.reduce(
    function (acumulatedValue = 0, newElement) {
      return (acumulatedValue + newElement);
    });

  let totalAverage = sumList / list.length;
  return totalAverage;
}

function salaryMedian(list) {
  const half = parseInt(list.length / 2);

  if (isEven(list.length)) {
    const halfPerson1 = list[half - 1]
    const halfPerson2 = list[half]

    const median = averageCalculation([halfPerson1, halfPerson2]);
    return median;

  } else {
    const halfPerson = list[half];
    return halfPerson;
  }
}
console.log(salaryMedian(sortedColSalary));

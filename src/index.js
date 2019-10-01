module.exports = function zeros(expression) {
  const elementsArray = expression.split("*");
  let zeros = 0;
  let twoCount = 0;
  let fiveCount = 0;

  elementsArray.forEach(element => {
    let two, five;
    if (element.includes("!!")) {
      [two, five] = calculateTwoAndFive(parseInt(element.slice(0, -2)), 2);
    } else {
      [two, five] = calculateTwoAndFive(parseInt(element.slice(0, -1)), 1);
    }
    twoCount += two;
    fiveCount += five;
  });

  return Math.min(twoCount, fiveCount);
};

function calculateTwoAndFive(element, step) {
  let twoCount = 0;
  let fiveCount = 0;
  for (let i = element; i > 1; i -= step) {
    if (i % 2 === 0) {
      twoCount += findPow(2, i);
    }
    if (i % 5 === 0) {
      fiveCount += findPow(5, i);
    }
  }

  return [twoCount, fiveCount];
}

function findPow(base, number) {
  let pow = 1;
  const newNumber = number / base;
  if (newNumber % base === 0) {
    pow += findPow(base, newNumber);
  }
  return pow;
}

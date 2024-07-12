function countPrimeNumbers() {
  let final = [];
  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
      final.push(i);
    }
  }
  return final.length;
}

setTimeout(
  () =>
    console.log(
      "Execution time of calculating prime numbers 100 times was " +
        (t1 - t0) +
        " milliseconds."
    ),
  0
);

const t0 = performance.now();
for (let i = 1; i <= 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();

function countPrimeNumbers() {
  let final = [];
  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
      final.push(i);
    }
  }
  return final.length;
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(
  "Execution time of printing countPrimeNumbers was " +
    (t1 - t0) +
    " milliseconds."
);

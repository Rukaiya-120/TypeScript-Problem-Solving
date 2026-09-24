// 2. Sum of Prime Numbers

const numbers: number[] = [11, 15, 2, 7, 6];

function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function sumOfPrimes(arr: number[]): number {
  return arr.filter(isPrime).reduce((sum, n) => sum + n, 0);
}

console.log(sumOfPrimes(numbers)); // Expected: 20

export {};

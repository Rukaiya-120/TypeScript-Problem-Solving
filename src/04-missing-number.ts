// 4. Find the Missing Number

const numbers: number[] = [0, 1, 2, 4, 5];

function findMissingNumber(arr: number[]): number {
  const n = arr.length; // full sequence is 0..n (n+1 numbers), one is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber(numbers)); // Expected: 3

export {};

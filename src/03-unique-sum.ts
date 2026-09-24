// 3. Sum of Unique Elements After Removing Duplicates

const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

function sumOfUnique(arr: number[]): number {
  const unique = [...new Set(arr)];
  return unique.reduce((sum, n) => sum + n, 0);
}

console.log(sumOfUnique(numbers)); // Expected: 41

export {};

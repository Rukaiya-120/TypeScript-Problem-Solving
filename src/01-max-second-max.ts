// 1. Difference Between Maximum and Second Maximum

const numbers: number[] = [11, 7, 2, 15, 6];

function maxAndSecondMaxDiff(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[0] - sorted[1];
}

console.log(maxAndSecondMaxDiff(numbers)); // Expected: 4

export {};

// 6. Return Repetitive Elements

const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function findRepeated(arr: number[]): number[] {
  const counts = new Map<number, number>();
  for (const n of arr) counts.set(n, (counts.get(n) || 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1).map(([num]) => num);
}

console.log(findRepeated(numbers)); // Expected: [4, 6]

export {};

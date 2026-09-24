// 5. Count Occurrence of Each Number

const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countOccurrences(arr: number[]): Map<number, number> {
  const counts = new Map<number, number>();
  for (const n of arr) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  return counts;
}

const result = countOccurrences(numbers);
for (const [num, count] of result) {
  console.log(`${num}: ${count}`);
}
/* Expected:
1: 1
2: 2
3: 3
4: 4
*/

export {};

// 8. Print All Permutations of a String

const text: string = "cat";

function permute(str: string): string[] {
  if (str.length <= 1) return [str];
  const results: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const rest = str.slice(0, i) + str.slice(i + 1);
    for (const p of permute(rest)) {
      results.push(str[i] + p);
    }
  }
  return results;
}

const perms = permute(text);
console.log(`Permutations: ${perms.join(", ")}`);
console.log(`Total permutations: ${perms.length}`);
/* Expected:
Permutations: cat, cta, act, atc, tac, tca
Total permutations: 6
*/

export {};

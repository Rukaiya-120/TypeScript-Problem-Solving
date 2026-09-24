// 7. Print Unique Characters from a String

const text: string = "abcaabbcc";

function uniqueChars(str: string): string[] {
  return [...new Set(str.split(""))];
}

const unique = uniqueChars(text);
console.log(`Unique characters: ${unique.join(", ")}`);
console.log(`Total unique characters: ${unique.length}`);
/* Expected:
Unique characters: a, b, c
Total unique characters: 3
*/

export {};

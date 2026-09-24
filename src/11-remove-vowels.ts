// 11. Remove All Vowels from a String

const text: string = "I am a SQA Engineer";

function removeVowels(str: string): string {
  return str
    .split(" ")
    .map((word) => word.toLowerCase().replace(/[aeiou]/g, ""))
    .filter((word) => word.length > 0)
    .join(" ");
}

console.log(removeVowels(text)); // Expected: m sq ngnr

export {};

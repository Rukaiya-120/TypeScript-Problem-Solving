// 10. Remove All Special Characters

const text: string = "s@atur!day";

function removeSpecialChars(str: string): string {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialChars(text)); // Expected: saturday

export {};

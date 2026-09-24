// 12. Check Valid Binary Number

function isValidBinary(str: string): boolean {
  return /^[01]+$/.test(str);
}

const binary1: string = "1001";
console.log(isValidBinary(binary1)); // Expected: true

const binary2: string = "2001";
console.log(isValidBinary(binary2)); // Expected: false

export {};

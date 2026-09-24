// 9. Generate a Random Password

const passwordLength: number = 8;

function generatePassword(length: number): string {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const special = "!@#$%^&*";
  const all = upper + lower + digits + special;

  // Guarantee at least one of each required character type
  const required = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    digits[Math.floor(Math.random() * digits.length)],
    special[Math.floor(Math.random() * special.length)],
  ];

  const remainingLength = length - required.length;
  const rest = Array.from(
    { length: remainingLength },
    () => all[Math.floor(Math.random() * all.length)]
  );

  const passwordChars = [...required, ...rest];

  // Shuffle so required characters aren't always at the start
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
}

console.log(generatePassword(passwordLength)); // Example: A9@hjs7K

export {};

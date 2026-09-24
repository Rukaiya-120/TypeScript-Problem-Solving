# TypeScript Programming — Batch 18

Solutions to the 15 TypeScript problem-solving exercises for Batch 18.

Each problem is implemented as its own standalone script in `src/`, runnable independently.

## Google Sheet

All 15 programs were also transcribed sequentially into a Google Sheet:
`https://docs.google.com/spreadsheets/d/1k5vLz8OU86NcSadFqcFMdRkdEhsDDAUjrRHNjyFx8CI/edit?usp=sharing`

---

## Questions

1. **Difference Between Maximum and Second Maximum** — Find the difference between the max and second-max value in `[11, 7, 2, 15, 6]`. Expected: `4`
2. **Sum of Prime Numbers** — Sum all prime numbers in `[11, 15, 2, 7, 6]`. Expected: `20`
3. **Sum of Unique Elements After Removing Duplicates** — Remove duplicates from `[11, 7, 7, 11, 2, 15, 6, 6]` and sum what's left. Expected: `41`
4. **Find the Missing Number** — Given `[0, 1, 2, 4, 5]`, find the missing number using `n*(n+1)/2 - sumOfArray`. Expected: `3`
5. **Count Occurrence of Each Number** — Count occurrences in `[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]`.
6. **Return Repetitive Elements** — Return only elements appearing more than once in `[1, 2, 3, 4, 4, 5, 6, 6, 7]`. Expected: `[4, 6]`
7. **Print Unique Characters from a String** — Unique characters + count in `"abcaabbcc"`.
8. **Print All Permutations of a String** — All permutations of `"cat"` + count. Expected count: `6`
9. **Generate a Random Password** — 8-character password with at least one uppercase, one lowercase, one digit, one special character.
10. **Remove All Special Characters** — Strip special characters from `"s@atur!day"`. Expected: `saturday`
11. **Remove All Vowels from a String** — Remove vowels from `"I am a SQA Engineer"`. Expected: `m sq ngnr`
12. **Check Valid Binary Number** — Validate that a string contains only `0`s and `1`s.
13. **Extract Digits and Calculate Discounted Total** — Parse prices out of a paragraph and apply a 15% discount. Expected: `74375 tk`
14. **Currency Note Breakdown** — Break `546` into the minimum number of notes from `[1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]`.
15. **Find 5-Mark and 10-Mark Questions** — Solve for how many 5-mark and 10-mark questions make 15 questions totaling 100 marks. Expected: `10` five-mark, `5` ten-mark.

---

## Project Structure

```
typescript-assignment-batch18/
├── src/
│   ├── 01-max-second-max.ts
│   ├── 02-sum-primes.ts
│   ├── 03-unique-sum.ts
│   ├── 04-missing-number.ts
│   ├── 05-count-occurrence.ts
│   ├── 06-repetitive-elements.ts
│   ├── 07-unique-characters.ts
│   ├── 08-permutations.ts
│   ├── 09-random-password.ts
│   ├── 10-remove-special-chars.ts
│   ├── 11-remove-vowels.ts
│   ├── 12-valid-binary.ts
│   ├── 13-discount-calculator.ts
│   ├── 14-currency-breakdown.ts
│   └── 15-mark-questions.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## How to Execute

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended) and `npm` installed.

### 2. Install dependencies
From the project root, run:

```bash
npm install
```

This installs the required TypeScript tooling (declared as devDependencies in `package.json`):
- `typescript`
- `ts-node`
- `@types/node`

### 3. Run a single program
Each program can be run directly with `ts-node`:

```bash
npx ts-node src/01-max-second-max.ts
```

Replace the filename with any of the 15 scripts in `src/`. Convenience npm scripts are also provided, numbered to match each question:

```bash
npm run 01   # runs src/01-max-second-max.ts
npm run 02   # runs src/02-sum-primes.ts
# ... through npm run 15
```

### 4. Run all programs at once

```bash
npm run all
```

This loops through every file in `src/` and executes it with `ts-node`, printing each program's output under a header with its filename.

### 5. (Optional) Compile to JavaScript
To type-check and compile everything to plain JS (output goes to `dist/`):

```bash
npm run build
node dist/01-max-second-max.js
```

---

## Notes
- `node_modules/` is excluded via `.gitignore` and is not committed to the repository.
- Each script is self-contained (uses `export {}` to keep its own scope) so files don't conflict with each other when type-checked together.

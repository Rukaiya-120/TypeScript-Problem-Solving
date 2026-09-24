// 15. Find 5-Mark and 10-Mark Questions

const totalQuestions: number = 15;
const totalMarks: number = 100;

function findMarkDistribution(
  questions: number,
  marks: number
): { fiveMark: number; tenMark: number } {
  // x + y = questions
  // 5x + 10y = marks
  // => 10 * questions - 5x - 10y = 10 * questions - marks (substitute)
  const tenMark = (marks - 5 * questions) / 5;
  const fiveMark = questions - tenMark;
  return { fiveMark, tenMark };
}

const { fiveMark, tenMark } = findMarkDistribution(totalQuestions, totalMarks);
console.log(`5-mark questions: ${fiveMark}`);
console.log(`10-mark questions: ${tenMark}`);
/* Expected:
5-mark questions: 10
10-mark questions: 5
*/

export {};

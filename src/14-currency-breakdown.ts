// 14. Currency Note Breakdown

const amount: number = 546;
const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function breakdownCurrency(amt: number, noteList: number[]): void {
  let remaining = amt;
  for (const note of noteList) {
    const count = Math.floor(remaining / note);
    if (count > 0) {
      console.log(`${note} x ${count}`);
      remaining -= note * count;
    }
  }
}

breakdownCurrency(amount, notes);
/* Expected:
500 x 1
20 x 2
5 x 1
1 x 1
*/

export {};

function normalSumAll(xd: number[]): number {
  let result = 0;

  for (let i = 0; i < xd.length; i++) {
    result += xd[i];
  }
  return result;
}
console.log(normalSumAll([1, 2, 3, 4, 5]));

export type SumAll = (xs: number[]) => number;

const sumAll: SumAll = (xd) => {
  // sum is the head of the list + the sum of the remaining [0] + 1
  if (xd.length === 0) {
    return 0;
  }

  const [head, ...rest] = xd;
  return head + sumAll(rest);
};

console.log(` Now using recursing: [${sumAll([1, 2, 3, 4, 5])}]`);

// more functional and readable version
const sumAllTwo: SumAll = (xs) => (xs.length == 0 ? 0 : xs[0] + sumAllTwo(xs.slice(1)));
console.log(` Now using recursing sumAllTwo : [${sumAllTwo([1, 2, 3, 4, 5])}]`);

function normalSum(a: number, b: number) {
  return a + b;
}

console.log(normalSum(1, 2)); // 3 :o

//this is the curried way

function sum(a: number) {
  return function (b: number) {
    return a + b;
  };
}

console.log(sum(1)(2)); // 3 :)

// let's make it more functional now...

export type Sum = (a: number) => (b: number) => number;
const functionalSum: Sum = (a) => (b) => a + b;

console.log(functionalSum(1)(2)); // 3

export type Increase = (a: number) => number;
export type Decrease = (a: number) => number;

const increase: Increase = sum(1);
const decrease: Decrease = sum(-1);

console.log(increase(2)); // 3
console.log(decrease(2)); // 1

// let's make it even more functional now...

type CurriedSum = (f: (a: number, b: number) => number) => (a: number) => (b: number) => number;
const curriedSum: CurriedSum = (f: (a: number, b: number) => number) => (a: number) => (b: number) => f(a, b);

// Same stuff, just using parametric polymorphism
export type CurriedSumGeneric = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z;
const curriedSumGeneric: CurriedSumGeneric = (f) => (a) => (b) => f(a, b);

const sumTwo = curriedSum(normalSum);
const sumTwoGeneric = curriedSumGeneric(normalSum);

console.log(sumTwo(1)(2)); // 3
console.log(sumTwoGeneric(1)(2)); // 3

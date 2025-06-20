type Increment = (x: number) => number;
const increment: Increment = (x: number) => x + 1;
console.log(increment(1));

type ToString = (x: number) => string;
const tostring: ToString = (x: number) => `"${x}"`;
console.log(tostring(5));

//this is okay, but it's hard good and not good practice...
type IncrementToStringExampleOne = (x: number) => string;
const incrementToString: IncrementToStringExampleOne = (x: number) => tostring(increment(x));
console.log(incrementToString(5));

// ...this is the better the better approach using parametric polymorphism (or generics)
type Compose = <P, Q, R>(f: (q: Q) => R, g: (p: P) => Q) => (p: P) => R; // I couldn't use a,b,c had to make it more mathematical lol
const compose: Compose = (f, g) => (x) => f(g(x));
const incrementToStringExampleTwo = compose(tostring, increment);
console.log(incrementToStringExampleTwo(5));

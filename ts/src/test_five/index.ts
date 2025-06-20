import { compose, Increment } from "../test_two";

type DivideTwoExOne = (x: number) => number;

const divideTwoExOne: DivideTwoExOne = (x: number): number => x / 2;
console.log(divideTwoExOne(10));
console.log(divideTwoExOne(0));

const increment: Increment = (x: number): number => x + 1;
console.log(increment(10));

type Option<A> = Some<A> | None;
interface Some<A> {
    _tag: 'Some'
    value: A
}

interface None {
    _tag: 'None'
}

const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x });
const none: Option<never> = { _tag: 'None' };

// using is None instead of boolean for the compiler :)
const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'; 

type DivideTwoExTwo = (x: number) => Option<number>;
const divideTwo: DivideTwoExTwo = (x: number): Option<number> => x === 0 ? none : some(x / 2);

const composedTwoExample = compose((x: Option<number>) => isNone(x) ? none : some(x.value * 2), divideTwo);



const composedTwo = compose(divideTwo, divideTwoExOne);
console.log(composedTwo(10));
console.log(composedTwo(0));
console.log(composedTwoExample(10));



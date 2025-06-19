/**
 * @author { @Override } | @since  20250619 : @13:01
 * @see <a href="https://github.com/TuringProblem">GitHub Profile</a>
 **/

type DataType = string | number;

type HumanType = {
  data: {
    id: DataType;
    name: DataType;
    age: DataType;
    gender: DataType;
    background: string[];
  };
};

const data: HumanType[] = [
  { data: { id: 1, name: "John", age: 30, gender: "male", background: ["football", "basketball"] } },
  { data: { id: 2, name: "Jane", age: 25, gender: "female", background: ["rimjobs", "basketball"] } },
  { data: { id: 3, name: "Bob", age: 35, gender: "male", background: ["painter", "carpentry"] } },
  { data: { id: 4, name: "jakub", age: 15, gender: "male", background: ["painter", "carpentry"] } },
];

// The normal way using a for loop
const storingDataIdsTestOne: DataType[] = [];

for (let i = 0; i < data.length; i++) {
  storingDataIdsTestOne.push(data[i].data.id);
  console.log(data[i].data.name);
}

console.log(`The first case: `, storingDataIdsTestOne);

// the beautiful functional way with forEach() -> sucks because you need to create a new array but not horrible
const storingDataIdsTestTwo: DataType[] = [];

data.forEach((humanAccount: HumanType) => {
  storingDataIdsTestTwo.push(humanAccount.data.id);
  console.log(humanAccount.data.name);
});
console.log(`The second case: `, storingDataIdsTestTwo);

// and even more beautiful functional way with map()
const storingDataIdsTestThree: DataType[] = data.map((humanAccount) => humanAccount.data.id);
console.log(`The third case: `, storingDataIdsTestThree);

// let's talk about reduce function -> {} and map()

const storingDataIdsTestFour: DataType[] = data.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue.data.id);
  return accumulator;
}, [] as DataType[]);

console.log("fourth case: ", storingDataIdsTestFour);

// Manipulating data with reduce - different examples:

// 1. Filter and transform in one go
const adultsOnly: HumanType[] = data.reduce((acc: HumanType[], person: HumanType) => {
  if (Number(person.data.age) >= 18) acc.push(person);
  if (Number(person.data.age) < 18) console.log(`This person is under 18: [${person.data.name}]`);

  return acc;
}, [] as HumanType[]);

const nameMap = data.reduce(
  (acc: Record<string, DataType>, person: HumanType) => {
    acc[person.data.name as string] = person.data.age;
    return acc;
  },
  {} as Record<string, DataType>,
);

const groupedByGender = data.reduce(
  (acc: Record<string, HumanType[]>, person: HumanType) => {
    const gender = person.data.gender as string;

    if (!acc[gender]) acc[gender] = [];

    acc[gender].push(person);

    return acc;
  },
  {} as Record<string, HumanType[]>,
);

const averageAge = data.reduce((sum: number, person: HumanType) => sum + Number(person.data.age), 0) / data.length;

console.log("Adults only:", adultsOnly.length);
console.log("Name to age map:", nameMap);
console.log("Grouped by gender:", groupedByGender);
console.log("Average age:", averageAge);

console.log("object before functional destructuring: ", data);

// Destructuring with Functional Programming Examples:

// 1. Destructuring in map() - extract specific properties
const namesOnly = data.map(({ data: { name } }) => name);
console.log("Names only:", namesOnly);

// 2. Destructuring in filter() - check multiple conditions
const youngMales = data.filter(({ data: { age, gender } }) => Number(age) < 30 && gender === "male");
console.log(
  "Young males:",
  youngMales.map(({ data: { name } }) => name),
);

// 3. Destructuring in reduce() - build complex objects
const peopleByBackground = data.reduce(
  (acc, { data: { name, background } }) => {
    background.forEach((skill) => {
      if (!acc[skill]) acc[skill] = [];
      acc[skill].push(name as string);
    });
    return acc;
  },
  {} as Record<string, string[]>,
);

console.log("People by background:", peopleByBackground);

// 4. Nested destructuring with default values
const processedData = data.map(({ data: { id, name, age, gender = "unknown", background = [] } }) => ({
  id,
  name,
  age: Number(age),
  gender,
  skillCount: background.length,
}));

console.log("Processed data:", processedData);

// 5. Destructuring in array methods with rest operator
const [firstPerson, secondPerson, ...rest] = data;

const {
  data: { name: firstName },
} = firstPerson;
const {
  data: { name: secondName },
} = secondPerson;

console.log("First person:", firstName);
console.log("Second person:", secondName);
console.log("Rest count:", rest.length);

// 6. Destructuring with conditional logic
const categorizedPeople = data.map(({ data }) => {
  const { age, gender, background } = data;
  const ageNum = Number(age);

  return {
    ...data,
    category: ageNum < 18 ? "minor" : ageNum < 30 ? "young" : "adult",
    hasSportsBackground: background.some((skill) => ["football", "basketball"].includes(skill)),
  };
});

console.log("Categorized people:", categorizedPeople);

/*
function helloWorld() {
  console.log('Hello World');
}

helloWorld();
*/

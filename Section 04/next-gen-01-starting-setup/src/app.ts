const userName = 'Ahmed';
// let age = 37;

// age = 36;
// var res;

// function add(a:number, b:number) {
//   res = a, b;
//   return res;  
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

//const add = (a: number, b: number = 1) => a + b;

//console.log(add(2, 5));

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');

if(button) {
  button.addEventListener('click', event => console.log(event));
}

//printOutput(add(5));

const hobbies = ['Sports', 'Cooking', 'Hiking', 'Reading', 'Programming'];
const  activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Ahmed',
  age: 37
}

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  numbers.reduce((curRes, curValue) => {
  return curRes + curValue;  
  }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [h1, h2, ...remainingHobbies] = hobbies;

console.log(hobbies);
console.log(h1, h2, remainingHobbies);

const { firstName: uName, age } = person;

console.log(uName, age);

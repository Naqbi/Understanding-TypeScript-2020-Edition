type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Ahmed',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.toString() + b.toString();
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return null;
}

const result = add('Ahmed', 'Qusoom');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Ahmed',
  job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);



// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);

//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }

//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// console.log('');
// printEmployeeInformation({ name: 'Ali', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(20);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;

//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }

//   console.log('Moving at speed: ' + speed);  
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// //const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = 'Hi there!';

// interface ErrorContainer { // { email: 'Not a valid emial', username: 'Must start with  a charater' }
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!'
// }
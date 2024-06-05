function Logger(logString: string) {
  console.log("Logging Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookElement = document.getElementById(hookId)!;
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Ahmed";

  constructor() {
    console.log("Creating person object...");
  }
}

// const person = new Person();

// console.log(person);

// ---

function Log(target: any, proportyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, proportyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  _title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("invalid price");
    }
  }
  constructor(t: string, p: number) {
    this._title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  const adjust: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunc = original.bind(this);
      return boundFunc;
    },
  };

  return adjust;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const prnt = new Printer();

const btn = document.querySelector("button");
btn?.addEventListener("click", prnt.showMessage);

// ---

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] // ['required', 'positive']
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ['required']
  };
}

function PositiveNum(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [name]: ['positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const valiator of objValidatorConfig[prop]) {
      switch (valiator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNum
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleElement = document.getElementById("title") as HTMLInputElement;
  const priceElement = document.getElementById("price") as HTMLInputElement;

  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }

  console.log(createdCourse);
});

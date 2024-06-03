// const names:Array<string> = []; // string[]
// //names[0].split(' ');

// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     })
// });

// promise.then(data => {
//     //data.split(' ');
// })
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  //return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Ahmed', hobbies: ['Reading'] }, { age: '37' });

const userAge = mergeObj.age;

console.log(mergeObj);
console.log(userAge);

interface Lengthy {
  length: number;
}

function countandDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length) {
    descriptionText = 'Got ' + element.length + ' element(s).';
  }
  return [element, descriptionText];
}

console.log(countandDescribe(['111', 'ss']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Ahmed' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ahmed');
textStorage.addItem('Ali');
textStorage.removeItem('Ali');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Ahmed'});
// objectStorage.addItem({name: 'Ali'});
// objectStorage.removeItem({name: 'Ali'});
// console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
};

function createCourseGoal(title: string, description: string, date: Date):CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Ahmed', 'Ali'];
// names.push('Hussain');
// names.pop();
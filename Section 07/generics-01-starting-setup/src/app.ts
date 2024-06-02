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
function merge<T, U>(objA: T, objB: U) {
    //return Object.assign(objA, objB);
    return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Ahmed', hobbies: ['Reading'] }, {age: '37'});

const userAge = mergeObj.age;

console.log(mergeObj); 
console.log(userAge);

console.log(mergeObj, userAge);

"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
printRes(add(5, 12));
let combineValues;
combineValues = add;
//combineValues = printRes;
//combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (res) => {
    console.log(res);
});

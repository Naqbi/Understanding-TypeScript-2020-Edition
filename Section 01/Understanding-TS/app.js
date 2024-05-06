function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result: ' + num);
}
printRes(add(5, 12));
var combineValues;
combineValues = add;
combineValues = printRes;
//combineValues = 5;
console.log(combineValues(8, 8));

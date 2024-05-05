function combine(input1, input2, resConv) {
    var res;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        res = input1 + input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    if (resConv === 'as-number') {
        return +res;
    }
    else {
        return res.toString();
    }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combinedNames = combine('Max', 'Ann', 'as-text');
console.log(combinedNames);

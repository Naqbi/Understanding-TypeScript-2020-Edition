function combine(input1: number | string, input2: number | string, resConv: 'as-number' | 'as-text') {
  let res;
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  if (resConv === 'as-number') {
    return +res; 
  } else {
    return res.toString();
  }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Max', 'Ann', 'as-text');
console.log(combinedNames);

function combine(input1: number | string, input2: number | string) {
  let res;
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }
   
  return res;
}

const combineAges = combine(30, 260);
console.log(combineAges);

const combinedNames = combine('Max', 'Ann');
console.log(combinedNames);

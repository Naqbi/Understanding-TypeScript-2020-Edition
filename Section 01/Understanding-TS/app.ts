function add(n1: number, n2: number): number {
	return n1 + n2;
}
function printRes(num:number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb) {
	const res = n1 + n2;
	cb(res);
}
printRes(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printRes;
//combineValues = 5;

console.log(combineValues(8, 8));

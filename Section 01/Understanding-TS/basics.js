"use strict";
function add(n1, n2, showRes, phase) {
    // if ( typeof n1 == 'number' || typeof n2 == 'number' ) {
    //     throw new Error('Incorrect input!');
    // }
    const res = n1 + n2;
    if (showRes) {
        console.log(phase + res);
    }
    else {
        return res;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printRes = true;
let resPhase = 'Result is ';
add(number1, number2, printRes, resPhase);

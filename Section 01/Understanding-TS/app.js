function add(n1, n2, showRes, phase) {
    // if ( typeof n1 == 'number' || typeof n2 == 'number' ) {
    //     throw new Error('Incorrect input!');
    // }
    var res = n1 + n2;
    if (showRes) {
        console.log(phase + res);
    }
    else {
        return res;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printRes = true;
var resPhase = 'Result is ';
add(number1, number2, printRes, resPhase);

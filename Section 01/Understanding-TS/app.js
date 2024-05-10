"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Ahmed';
if (typeof userInput === 'string') {
    userName = userName;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);

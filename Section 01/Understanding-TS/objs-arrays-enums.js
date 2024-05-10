"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Ahmed',
    age: 37,
    hobbies: ['Cooking', 'Sports'],
    role: Role.ADMIN
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}

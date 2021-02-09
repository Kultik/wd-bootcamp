// let userInput = prompt("Enter something");

// if (userInput) {
//     console.log(`Truthy`);
// } else {
//     console.log(`Falsy`);
// }

// if (false) {
//     console.log(`Truthy`);
// } else {
//     console.log(`Falsy`);
// }

// same reasoning applies to other JS falsies
// 0 - null - false - NaN - undefined

// Logical Operators

const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log(`Valid password`);
} else {
    console.log(`Incorrect format`);
}
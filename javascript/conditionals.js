// console.log(`Before`);

// let randomNumber = Math.random();

// if (randomNumber < 0.5) {
//     console.log(`Your number is less than 0.5`);
//     console.log(randomNumber);
// }

// console.log(`After`);

// // Else If

// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === `monday`) {
//     console.log(`I hate Mondays`);
// } else if (dayOfWeek === 'saturday') {
//     console.log(`I love Saturdays`)
// } else if (dayOfWeek === 'friday') {
//     console.log(`Let the weekend begin`)
// } else {
//     console.log(`Meh`);
// }

// const age = 55;

// if (age < 5) {
//     console.log(`You're a baby`);
// } else if (age < 10) {
//     console.log(`You're a child`);
// } else if (age < 65) {
//     console.log(`You're old`);
// }

// // My try 

// let x = prompt('Enter a number');
// let p = parseInt(x);

// if (p < 50) {
//     alert("You go low");
// } else {
//     alert("I go high");
// }

// // Nesting conditionals 

const password = prompt("Please enter a password");

// // Password must be 6+ characters
// if (password.length >= 6) {
//     console.log("Password long enough");
// } else {
//     console.log("Password too short. Must be 6+ characters");
// }

// // Password cannot include space
// if (password.indexOf(' ') === -1) {
//     console.log("Good, no spaces.");
// } else {
//     console.log("Password cannot contain spaces");
// }

// Putting it all together

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password");
    } else (console.log('Password cannot contain spaces'));
} else {
    console.log("Password too short. Must be 6+ characters");
}


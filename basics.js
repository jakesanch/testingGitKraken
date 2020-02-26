// All of the basics are going to be placed here really.
console.log("Below is testing of basic string methods and operations:\n---------------------------------\n");

let myName = "Jake Sanchez";
console.log(`Original name is: ${myName}`);
myName.toUpperCase();
console.log(`Name after change with .toUpperCase(): ${myName}\n`);

console.log("We can also do some cool things with strings like splitting up into an array: ");

console.log(myName.split(" "));     // uses spaces to split by space!
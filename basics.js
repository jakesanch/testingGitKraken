// All of the basics are going to be placed here really.
console.log("Below is testing of basic string methods and operations:\n--------------------------------------------------------\n");

let myName = "Jake Sanchez";
console.log(`Original name is: ${myName}`);
myName = myName.toUpperCase();
console.log(`Name after change with .toUpperCase(): ${myName}\n`);

console.log("We can also do some cool things with strings like splitting up into an array: ");

console.log(myName.split(" "));     // uses spaces to split by space!



// Working with lists now!
console.log("\nBelow is testing of working with lists (Arrays) and iterating:\n--------------------------------------------------------------\n");

let cars = ["Maserati", "Honda", "Toyota", "Nissan", "Subaru", "Dodge"];
 
// Loop over the list of car models using 'for of..' loop since it'll give us values!
console.log("Using the 'for of..' loop to just get values!");
for (let car of cars) {
    console.log(car);
}

// See difference of using 'for in..' loop
console.log("\nUsing the 'for in..' loop to go over cars:");
for (let i in cars) {
    console.log(`Index ${i}, Value ${cars[i]}`);
}

console.log("\nBasically justs gets you the indices which could be helpful rather than using traditional for loop!");


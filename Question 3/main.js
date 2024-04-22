"use strict";
// Question 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
let personsName = "Taha";
console.log(personsName.toLowerCase());
console.log(personsName.toUpperCase());
console.log(personsName.charAt(0).toUpperCase() + personsName.slice(1).toLowerCase());

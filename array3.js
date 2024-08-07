"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["NewYork", "Tokyo", "Munich", "Karachi", "Amsterdam", "Bejing", "Delhi"];
//orignal order
console.log("Our array in orignal order will be", places);
//alphabetical order
let newPlaces = places.sort();
console.log("Our array in alphabetical order will be", newPlaces);
//reverse Alphabetical order
let newPlaces2 = places.sort((a, b) => b.localeCompare(a));
console.log(newPlaces2, "reverse alphabetical order");
//reverse order
let places3 = places.reverse();
console.log("Our array in reverse order will be", places3);
// again reversing (orignal order)
let places4 = places3.reverse();
console.log("Our array in orignal order will be", places4);
// alphbaetecial order altering the orignal array
places.sort();
console.log(places, "alphabatecial order");
//reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log(places, "reverse alphabetical order");

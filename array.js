"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let newArray1 = ["Ibad", "Ammad", "Aquib ", "Salman", " Sajid", "Hassan"];
newArray1.sort((a, b) => a.localeCompare(b));
console.log("our array is", newArray1);
newArray1.sort((a, b) => b.localeCompare(a));
console.log(newArray1, "  Our array in reverse alphabetical order is");

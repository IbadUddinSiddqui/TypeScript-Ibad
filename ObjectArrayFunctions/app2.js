"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let orignalArray = ["student", 123, false, "GIAC", "am", "I", "of", "a"];
let mappedArray = orignalArray.map(element => element.toString());
let correctOrderArray = [
    mappedArray[5],
    mappedArray[4],
    mappedArray[7],
    mappedArray[0],
    mappedArray[6],
    mappedArray[3],
];
let resultString = correctOrderArray.join(`  `);
console.log(resultString);

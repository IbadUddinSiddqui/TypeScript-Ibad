"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myObj = {
    item1: "string0",
    item2: "string1",
    item3: "string2",
};
//now we are going to use new concept of for in loop 
for (let key in myObj) {
    console.log(`${key} :  ${myObj[key]}`);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = {
    friends: [],
};
let friend1 = {
    firstName: "Ibad",
    lastName: "Uddin",
    id: 1
};
let friend2 = {
    firstName: "Ammad",
    lastName: "Uddin",
    id: 2
};
let friend3 = {
    firstName: "Aquib",
    lastName: "Uddin",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);

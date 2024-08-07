type Peeps = {
    friends : Friend[],
}
let people : Peeps = 
{
 friends: [],
}
type Friend = {
    firstName : string,
    lastName : string,
    id? : number,
}
let friend1 : Friend = {
    firstName : "Ibad",
    lastName : "Uddin",
    id: 1
}
let friend2 : Friend = {
    firstName : "Ammad",
    lastName : "Uddin",
    id : 2
}
let friend3 : Friend = {
    firstName : "Aquib",
    lastName : "Uddin",
    id : 3
}
 people.friends.push(friend1, friend2, friend3);
 console.log(people);
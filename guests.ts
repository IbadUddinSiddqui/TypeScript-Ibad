// Guest List
let guests = ["Ibad","Ammad","Hania","Aquib"];
 guests.forEach( (guest) => console.log(  guest,"Your are invited"));
 // New guest list
 console.log("Sadly hania couldnt make it to the dinner so....");
 guests.splice(2,1,"Fahim");
 guests.forEach( (guest) => console.log(  guest,"Your are invited"));
 // MOre Guests
 console.log(guests , " We just found a bigger table ");
 guests.unshift("Ali")
 guests.push("Ammar","Salman","Khalid","Waleed");
 guests.splice(4,0,"ibraheem")
 guests.forEach( (guest) => console.log(  guest,"Your are invited to a bigger table"));
 // Shrinnking lists
 console.log(guests , " We just couldnt find enough room for all we can manage only for 2 ");
 // Removing and appologizng
 while (guests.length > 2){
    let removedGuests = guests.pop()
    console.log(` ${removedGuests} , "We are really sorry.. we colundt manage many attendants"`);
 }
 // For remaining 2 guests
 console.log(guests ,"  You are still invited");
 // Cancelling the program
 console.log(`${guests} , " we are really sorry we couldnt manage any guests "`);
 guests.pop()
 guests.pop()
 // Final list
 console.log(`${guests} /n Final list`)


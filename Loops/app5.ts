let theArray = [];
for (let i = 0 ; i <= 10 ; i++){
    theArray.push(i);
}
console.log(theArray);
for(let i=0;i<theArray.length;i++){
    console.log(`Index of the element : ${i}, Value :${theArray[i]}`)}
   
    ;
    ;
console.log("Using for...of loop");
for(let key of theArray){
    console.log( `Value :${theArray[key]}`);    
}    
let myObj : { [key:string] : string} = {
    item1 : "string0" ,
    item2 : "string1" ,
    item3 : "string2" ,
    };
//now we are going to use new concept of for in loop 
for(let key in myObj){
    console.log(`${key} :  ${myObj[key]}`)
}
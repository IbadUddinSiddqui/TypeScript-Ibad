let myWork  : {name : string , status : boolean } [] = [];
for (let i = 1; i <= 10 ; i++){
    let lesson = {
        name : "lesson " + i,
        status : i % 2 === 1 ? true : false ,
    }
    myWork.push(lesson);
}
console.log(myWork);
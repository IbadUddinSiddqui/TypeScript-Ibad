function getData(): Promise<String>{
    return new Promise(resolve =>{
        setTimeout(()=>{
        resolve("Data Downloaded Successfully");
    },2000)
    })
}

function InitiallizingData(Id :String):Promise<String>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(`Processed Data : ${Id}`);
            
        },2000)
    })
}
 
function execution(): void {
    getData()
    .then(data => {
        console.log(data);
        return InitiallizingData(data);
        
    })
    .then( processedData =>{
        console.log(processedData);
        
    })
    .catch(error => {
        console.log(error);
        
    })

}
execution()
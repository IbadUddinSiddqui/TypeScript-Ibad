function fetchWithError (): Promise<String> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const accomplised = Math.random() > 0.5;
        if(accomplised){
            resolve("Data Fetched Succesfully");
        }
        else{
            reject("Error Occured");
        }
        }
        ,2000)
    } )
}
fetchWithError()
.then(result => {
    console.log(result);
    
})
.catch(error =>
    {
        console.log(error);
        
    })

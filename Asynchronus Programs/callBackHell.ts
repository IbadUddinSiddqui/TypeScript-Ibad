function getData(dataId,getNextData? ){
    setTimeout(() => {
        console.log(" Currnet dataId",dataId);
        if (getNextData){
            getNextData();
        }
    } ,2000)
}

getData(
    1,() => {
    console.log("Getting Data 2.......")
    getData(2,() => {
        console.log("Getting Data 3.......")
        getData(3,() => {
            console.log("Getting Data 4.......")
            getData(4,() => {
                console.log("Getting Data 5.......")
                getData(5);
            })
        })
    })
})
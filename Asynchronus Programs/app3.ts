function fetchData():Promise<string>{
    return new Promise(
        (resolve => {
            setTimeout(() => {
                resolve("Data Fetched Sccessfuly")
            },2000)
        } )
    )
}
async function testData() {
    console.log("Before Fetching Data")
    const data = await fetchData();
    console.log(data);
}
testData()
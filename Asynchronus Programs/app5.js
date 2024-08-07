function getData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data Downloaded Successfully");
        }, 2000);
    });
}
function InitiallizingData(Id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Processed Data : ".concat(Id));
        }, 2000);
    });
}
function execution() {
    getData()
        .then(function (data) {
        console.log(data);
        return InitiallizingData(data);
    })
        .then(function (processedData) {
        console.log(processedData);
    })
        .catch(function (error) {
        console.log(error);
    });
}
execution();

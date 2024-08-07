function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var accomplised = Math.random() > 0.5;
            if (accomplised) {
                resolve("Data Fetched Succesfully");
            }
            else {
                reject("Error Occured");
            }
        }, 2000);
    });
}
fetchWithError()
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) {
    console.log(error);
});

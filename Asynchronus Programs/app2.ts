function wait(ms:number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function simulateTask():Promise<void> {
    console.log("Beginning");
    await wait(1000);
    console.log("Ending");
    }
    simulateTask()
function simulateAsyncTask(){
    console.log("Task started");
    
    setTimeout(()=>{
        console.log("Task finished");

    }, 2000)
}

simulateAsyncTask()
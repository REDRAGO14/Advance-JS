function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false
        if (success){
            resolve({name: "dagim", age: 15})
        }else{
            reject("can't load the data")
        }
        }, 3000);
        
    })
}

async function getfetchedData(){
    console.log("data is being fetched........");
    try{
    let userData = await fetchData()
    console.log(userData);
    
    }catch(error){
        console.log(error);
        
    }
}
getfetchedData()
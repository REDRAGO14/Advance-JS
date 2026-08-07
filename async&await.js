function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
        if (success){
            resolve({name: "dagim", age: 15})
        }else{
            reject("can't load the data")
        }
        }, 3000);
        
    })
}

/* fetchData()
    .then((value) => console.log(value))
    .catch((error) => console.log(error)) */


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
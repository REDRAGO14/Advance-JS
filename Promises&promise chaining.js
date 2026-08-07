function fetch_data(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if(success){
                resolve("Data has fetched successfully")
            }else{
                reject("the fetch has failed")
            }
        }, 3000);
    })
}

fetch_data()
    .then((data)=>{
        console.log(data)
        return data.toLowerCase()
    })
    .then((value) =>console.log(value) )
    .catch((error) => console.log(error))


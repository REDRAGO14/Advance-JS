function fetchUser(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("user data fetched")
        }, 1000);
    })
}
function fetchPost(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("user posts fetched")
        }, 1000);
    })
}

async function fetchAllData(){
    // let userData = await fetchUser()
    // let postData = await fetchPost()
    let [userData, postData] = await Promise.all([fetchUser(), fetchPost()])
    console.log(userData);
    console.log(postData);
    
}

fetchAllData()
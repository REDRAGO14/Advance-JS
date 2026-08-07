function getPostData(){
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
 try {
            console.log("fetching post Data......");
            resolve("post data fetched")
            
        } catch (error) {
            console.error("error happend while fetching post");
            
        }
       }, 3000)
    })
}

function getCommentData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            try {
                console.log("fetching comment Data.....");
                resolve("comments has been fetched ")
                
            } catch (error) {
                console.log("error happend while fetching comment"+ error);
                
            }
        }, 2000);
    })
}

async function fetchBlogData(){
    // let postData = await getPostData()
    // let commentData = await getCommentData()
    let [postData, commentData] = await Promise.all([getPostData(), getCommentData()])
    console.log(commentData);
    console.log(postData);
    
    console.log("blog fetched complete");   
}

fetchBlogData()

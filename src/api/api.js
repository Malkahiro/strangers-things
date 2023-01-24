const url = 'https://strangers-things.herokuapp.com/api/2204-FTB-ET-WEB-PT/';



 export const getPosts = async () =>{
    try{
        const response = await fetch(`${url}posts`);
        const data = await response.json();
        const posts = await data.data.posts;
        console.log("api posts", posts);
        return posts;
    } catch(error){
        throw error
    }
}
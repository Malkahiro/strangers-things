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

export const registerUser = async (username, password) =>{
    try{
        await fetch(`${url}users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error)
    } catch(error){
        console.error(error)
    }
}
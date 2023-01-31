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
       const response =  await fetch(`${url}users/register`, {
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
        })
        
       const data = response.json();
       console.log(data);
       return data; 
    } catch(error){
        console.error(error)
    }
}

export const loginUser = async (username, password) =>{
    try{
        const response = await fetch(`${url}users/login`, {
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
        });
        const data = response.json();
        console.log(data);
        return data;
    } catch(error){
        console.error(error)
    }
}
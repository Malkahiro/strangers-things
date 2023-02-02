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
        
       const json = await response.json();
       console.log(json);
       localStorage.setItem('stranger_things_JWT', json.data.token);
       console.log(json);
       return json; 
    } catch(error){
        console.log(error)
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
        const json = await response.json();
        localStorage.setItem('stranger_things_JWT', json.data.token);
        console.log(json);
        return json;
    } catch(error){
        console.error(error)
    }
}

export const addPost = async (token, title, description, price) =>{
    try{
        const response = await fetch(`${url}posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price
                }
            })
        });

        const json = await response.json();
        console.log(json);
        return json;
    } catch(error) {
        console.error(error)
    }
}

export const testAuth = async () =>{
    try{
        const token = localStorage.getItem('stranger_things_JWT');
        const response = await fetch(`${url}test/me`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`
          }  
        });
        console.log(response);

        const json = await response.json();
        console.log(json);
        return json;
    } catch(error){
        console.error(error)
    }
}
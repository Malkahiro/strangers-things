import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts = async () =>{
      const resp = await fetch('https://strangers-things.herokuapp.com/api/2004-FTB-ET-WEB-PT/posts');
      const data = await resp.json();
      const posts = data.data.posts
      console.log(posts);
      setPosts(posts)
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      {
       posts.map((post) =>{
         return <div key={post._id}>
          <p>{post.title}</p>
         </div>
        })
      }
    </div>
  );
}

export default App;

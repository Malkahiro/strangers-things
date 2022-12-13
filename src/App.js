import React, { useEffect, useState } from "react";
import Posts from "./Components/Posts/Posts";
import {api} from "./API/api"

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts = async () =>{
      const resp = await fetch(`${api}posts`);
      const data = await resp.json();
      const posts = data.data.posts
      console.log(posts);
      setPosts(posts)
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Posts posts={posts}/>
    </div>
  );
}

export default App;

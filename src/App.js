import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts = async () =>{
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await resp.json();
      console.log(data);
      setPosts(data)
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <p>Hello World</p>
      {
       posts.map((post) =>{
         return <div key={post.id}>
          <p>{post.title}</p>
         </div>
        })
      }
    </div>
  );
}

export default App;

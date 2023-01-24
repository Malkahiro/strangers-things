import {useState, useEffect} from 'react';
import {getPosts} from "./api/api"

function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
  getPosts()
        .then(results =>{
          setPosts(results)
          console.log(results);
        }).catch(error => console.error(error))

  },[])

  const mappedPosts = posts.map(post =>{
    return <div key={post._id}>
      <h1>{post.title}</h1>
      <h2>{post.author.username}</h2>
    </div>
  })
  
  return (
    <div className="App">
      {mappedPosts}
    </div>
  );
}

export default App;

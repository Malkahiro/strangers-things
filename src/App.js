import {useState, useEffect} from 'react';
import {getPosts} from "./api/api"
import Posts from './Components/Posts';

function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
  getPosts()
        .then(results =>{
          setPosts(results)
          console.log(results);
        }).catch(error => console.error(error))

  },[])

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;

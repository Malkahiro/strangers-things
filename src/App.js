import {useState, useEffect} from 'react';
import {getPosts} from "./api/api"
import Posts from './Components/Posts';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';

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
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path={"/posts"} element={<Posts posts={posts} />} />
      <Route path={"/register"} element={<Register />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

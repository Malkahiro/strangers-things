import {useState, useEffect} from 'react';
import {getPosts, testAuth} from "./api/api"
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PostForm from './Components/Posts/PostForm';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('stranger_things_JWT');

  useEffect(()=>{
  getPosts()
        .then(results =>{
          setPosts(results)
        }).catch(error => console.error(error))
  },[])

  return (
    <BrowserRouter>
    <Navbar />
    <button onClick={() => testAuth()}>Test Auth</button>
    <div className="App">
      <Routes>
      <Route path={"/"} element={<Posts posts={posts} />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={'/login'} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path={'/add'} element={<PostForm token={token} />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

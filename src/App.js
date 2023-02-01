import {useState, useEffect} from 'react';
import {getPosts} from "./api/api"
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PostForm from './Components/Posts/PostForm';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Auth, setAuth] = useState("");

  const handleAuth = (token) =>{
    setAuth(token);
  }

  useEffect(()=>{
  getPosts()
        .then(results =>{
          setPosts(results)
          console.log(results);
        }).catch(error => console.error(error))
  },[])

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
      <Route path={"/"} element={<Posts posts={posts} />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={'/login'} element={<Login handleAuth={handleAuth} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path={'/add'} element={<PostForm Auth={Auth} />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

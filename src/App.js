import {useState, useEffect} from 'react';
import {getPosts, testAuth} from "./api/api"
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PostForm from './Components/Posts/PostForm';

function App() {
  const token = localStorage.getItem('stranger_things_JWT');
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=>{
    setIsLoggedIn(!!token);
  getPosts()
        .then(results =>{
          setPosts(results)
        }).catch(error => console.error(error))
  },[token])

  console.log('this is token', token);

  return (
    <BrowserRouter>
    <Navbar />
    <button onClick={() => testAuth()}>Test Auth</button>
    <button onClick={() => {
      localStorage.removeItem("stranger_things_JWT");
    }}>Logout</button>
    <div className="App">
      <Routes>
      <Route path={"/"} element={isLoggedIn ? <Posts posts={posts} /> : <p>Please Log In...</p>} />
      <Route path={"/register"} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/add'} element={<PostForm token={token} />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

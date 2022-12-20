import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Posts from "./Components/Posts/Posts";
import {api} from "./API/api"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts = async () =>{
      const resp = await fetch(`${api}posts`);
      const data = await resp.json();
      const posts = data.data.posts
      setPosts(posts)
    }

    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
      <Route exact path={"/register"} element={<Register />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/posts"} element={<Posts posts={posts}/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

import {useState, useEffect} from 'react';
import {getPosts, testAuth} from "./api/api"
import Posts from './Components/Posts/Posts';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PostForm from './Components/Posts/PostForm';
import PostDetails from './Components/Posts/PostDetails';
import UpdatePost from './Components/Posts/UpdatePost';
import Home from './Components/Home/Home';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthor, setIsAuthor] = useState("");

  const isValidJWT = async () =>{
    const token = localStorage.getItem('stranger_things_JWT');
    if (!token) setIsLoggedIn(false);
    else{
      const isValid = await testAuth();
      setIsLoggedIn(isValid.success)
    }
  }

  const createPosts = async () =>{
    try{
      const response = await getPosts();
      setPosts(response)

    } catch(error){
      console.error(error)
    }
  }

  useEffect(() =>{
    setIsLoggedIn(!!localStorage.getItem("stranger_things_JWT"));
    createPosts();
    const setAuthor = async () =>{
      const test = await testAuth();
      setIsAuthor(test.data.user.username);
    }
    setAuthor();
  }, [])

  console.log(posts);
  console.log(isAuthor);

  return (
    <BrowserRouter>
    <Navbar posts={posts} setSearchResults={setSearchResults} />
    <button onClick={() => testAuth()}>Test Auth</button>
    <button onClick={() => {
      localStorage.removeItem("stranger_things_JWT");
    }}>Logout</button>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      <Route path={"/posts"} element={isLoggedIn ? <Posts posts={posts} searchResults={searchResults} isAuthor={isAuthor} /> : <p>Please Log In...</p>} />
      <Route path='posts/:POST_ID' element={<PostDetails posts={posts} />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={'/login'} element={<Login isValidJWT={isValidJWT} />} />
      <Route path={'/add'} element={<PostForm />} />

      {<Route path={'posts/update/:POST_ID'} element={<UpdatePost posts={posts} />} />}
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

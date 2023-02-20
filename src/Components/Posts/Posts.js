import './Posts.css'
import { Link } from 'react-router-dom'
const Posts = ({posts, isAuthor}) => {
  console.log(isAuthor);
    const mappedPosts = posts.map(post =>{
        return <div id="post" key={post._id}>
          <Link to={`/posts/${post._id}`}>
          <h1>{post.title}</h1>
          <h2>{post.author.username}</h2>
          </Link>
          {post.isAuthor === isAuthor && <button onClick={() =>{
          <Link to={`/posts/update/${post._id}`}>Update Post</Link>
          }}>Update Post</button>}
          <h1>HELLO</h1>
          
        </div>
      })

    return (  <>
        {mappedPosts}
        {/* {<button onClick={(event) => event.target}>Update Post</button>} */}
        </>
         );
}
 
export default Posts;
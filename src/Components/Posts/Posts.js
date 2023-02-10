import './Posts.css'
import { Link } from 'react-router-dom'
const Posts = ({posts, handlePostId}) => {
    const mappedPosts = posts.map(post =>{
        return <div id="post" key={post._id}>
          <Link to={`/posts/${post._id}`}>
          <h1>{post.title}</h1>
          <h2>{post.author.username}</h2>
          </Link>
          <button onClick={() => {
            handlePostId(post._id);
            <Link to={`/${post._id}`}></Link>
          }}>Update Post</button>
        </div>
      })

    return (  <>
        {mappedPosts}
        {/* {<button onClick={(event) => event.target}>Update Post</button>} */}
        </>
         );
}
 
export default Posts;
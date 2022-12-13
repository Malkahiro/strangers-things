import './Posts.css'
const Posts = ({posts}) => {
    return ( <div className='posts'>
        {
       posts.map((post) =>{
         return <div className="post" key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <h3>Price: {post.price}</h3>
          <h1>Seller: {post.author.username}</h1>
          <h3>Location: {post.location}</h3>
         </div>
        })
      }
    </div> );
}
 
export default Posts;
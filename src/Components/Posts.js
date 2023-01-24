
const Posts = ({posts}) => {
    const mappedPosts = posts.map(post =>{
        return <div key={post._id}>
          <h1>{post.title}</h1>
          <h2>{post.author.username}</h2>
        </div>
      })

    return (  <>
        {mappedPosts}
        </>
         );
}
 
export default Posts;
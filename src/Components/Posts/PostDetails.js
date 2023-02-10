import React from 'react'
import {useParams} from 'react-router-dom';

const PostDetails = ({posts}) => {
    const {POST_ID} = useParams();
    const mappedPosts = posts.filter((post) => post._id === POST_ID).map((post) =>{
       return( 
        <>
                <h1>{post.title}</h1>
                 <p>{post.description}</p>
                 <p>{post.price}</p>
                 <h2>Seller: {post.author.username}</h2>
                 <h3>Location: {post.location}</h3>
        </>
       )
    })

    return ( <div>
        <p>{mappedPosts}</p>
    </div> );
}
 
export default PostDetails;
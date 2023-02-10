import React, {useState} from 'react';
import './PostForm.css'
import updatePost from '../../api/api'
const UpdatePost = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const token = localStorage.getItem("stranger_things_JWT");

    // const handleSubmit = async (event) =>{
    //     event.preventDefault();
    //     const response = await updatePost(postId, token, title, description, price, location, willDeliver);
    //     setTitle("");
    //     setDescription("");
    //     setPrice("");
    //     setLocation("");
    //     setWillDeliver(false);
    // }

    return ( <form id='add-form'>
        <label>Title</label>
        <input type="text" value={title} placeholder='Update Title' onChange={(event) => setTitle(event.target.value)} />
        <label>Description</label>
        <input type="text" value={description} placeholder='Update Description' onChange={(event) => setDescription(event.target.value)} />
        <label>Price</label>
        <input type="text" value={price} placeholder='Update Price' onChange={(event) => setPrice(event.target.value)} />
        <label>Location</label>
        <input type="text" value={location} placeholder='Update Location' onChange={(event) => setLocation(event.target.value)} />
        <label>willDeliver</label>
        <input type="checkbox" value={willDeliver} onChange={setWillDeliver(!willDeliver)} />
        <button type="submit">Update</button>
    </form> );
}
 
export default UpdatePost;
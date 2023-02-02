import React, {useState} from "react";
import { addPost } from "../../api/api";
import './PostForm.css'

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const token = localStorage.getItem("stranger_things_JWT");


    const handleCreate = async (event) =>{
        event.preventDefault();
        const response = await addPost(token, title, description, price, location, willDeliver)
        console.log(response);
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false);
    }
    return ( 
        <form id="add-form" onSubmit={handleCreate}>
            <label>Title</label>
            <input type="text" required placeholder="Title*" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Description</label>
            <input type="text" required placeholder="Description*" value={description} onChange={(event) => setDescription(event.target.value)} />
            <label>Price</label>
            <input type="text" required placeholder="Price*" value={price} onChange={(event) => setPrice(event.target.value)} />
             <label>Location</label>
            <input type="text" placeholder="Location*" value={location} onChange={(event) => setLocation(event.target.value)} /> 
             <label>Willing to Deliver?</label>
            <input type="checkbox" value={willDeliver} onChange={() => setWillDeliver(!willDeliver)} /> 
            <button type="submit">Create</button>
        </form> );
}
 
export default PostForm;
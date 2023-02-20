import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({posts, setSearchResults}) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const handleSearchChange = (event) =>{
        if(!event.target.value){
            return setSearchResults(posts)
        }
        const resultsArr = posts.filter(post => post.title.includes(event.target.value) || 
        post.description.includes(event.target.value));
        setSearchResults(resultsArr)
    }
    return ( <header>
        <form className="search" onSubmit={handleSubmit}>
            <input className="search_input" 
            type="text" 
            id="search" 
            onChange={handleSearchChange} 
            />
            <button className="search_button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </header> );
}
 
export default Searchbar;
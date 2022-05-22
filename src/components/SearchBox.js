import React from "react";

const SearchBox = (props) => {
    return (
        <div>
            <input 
            value={props.value} 
            onChange={(event)=> props.setSeachValue(event.target.value)}
            placeholder="Type to search"
            ></input>
        </div>
    )
}

export default SearchBox;
import React, { useState } from 'react';

export const Search = (props) => {
    const [newtask, setNewtask] = useState("");

    return (
        <div>
            <input 
                value={newtask} 
                onChange={(e) => setNewtask(e.target.value)} 
            />
            <button onClick={() => {
                props.newValue(newtask);
                setNewtask(""); // Clear the input field after adding the task
            }}>
                Add
            </button>
        </div>
    );
};

export default Search;

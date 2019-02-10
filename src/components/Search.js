import React from 'react'
import '../App.css'



function Search(props) {
   
 

    return (
        <div style={{fontWeight:600, background: "linear-gradient(to left, green, cyan)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent"}}>
            Search: <input placeholder="Search for Item Here"onChange={(e) => props.handleChange(e.target.value)} type='text' />
        </div>
    )


}

export default Search
import React from 'react'
import '../App.css'



function Search(props) {
   
 

    return (
        <div style={{fontWeight:600, 
            background: "linear-gradient(to left, green, cyan)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "purple"
        }}>
            Search: <input  className="itemButtonHover" onChange={(e) => props.handleChange(e.target.value)} type='text' />
        </div>
    )


}

export default Search
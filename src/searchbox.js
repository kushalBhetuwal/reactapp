import React from 'react';

const SearchBox = ({searchange})=>{
    return(
        <div className="tc pa2 ">
            <input className = "pa3 ba b--green bg-lightest-blue" type = "search" placeholder= "search" onChange={searchange} />
        </div>
    )
}

export default SearchBox;
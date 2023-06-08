import React from 'react'; 

const Card = ({id, name,email})=>{
    return (
        <div className = "tc outline w-25 pa3 mr2 grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?200x200`} alt = "robotpicture"/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;
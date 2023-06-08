import React from "react";
import Card from "./card"; //

const Cardlist= ({robot})=>{
    return(
        <div>
            {robot.map((user,i)=>{
                return (
                    
                    <Card key={i} id={user.id} email={user.email} name= {user.name}/>
                )
            })}

        </div>
    )
}

      
export default Cardlist;

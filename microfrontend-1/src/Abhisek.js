import React from "react";

export default function Abhisek({Name}) {
  return <div>
    <h2>
      This is a button in which you can click insteed
    </h2>
    <img style={{width:"100px",border:"3px solid teal"}} src="https://media.licdn.com/dms/image/D4D22AQEiXS81cO0-0A/feedshare-shrink_800/0/1692076938164?e=1698278400&v=beta&t=ekrOTcq0b_dOPqf6RXO8-FshEDDpVGjabByyTj6Dd-Y" alt="logo"/>
     <h3 onClick={()=>{alert("You clicked on text wow")}} >This is a beautiful {Name}</h3>  
  </div>
}

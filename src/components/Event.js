import React, { useState } from 'react';

const Event = () => {
    const [name,setName]=useState({firstname:""})
    const handleClick =()=>{

    }
    return (
        <div>
       
          <input value={(event)=>setName{firstname:event.target.value}  />
          <br/>
          <input value=""/>
          <br/>
          <button onClick={handleClick} >click</button>
        </div>
    );
};

export default Event;
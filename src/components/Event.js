import React, { useEffect, useRef, useState } from 'react';

const Event = () => {
    const [name,setName]=useState({firstname:"",lastname:""})
    const handleClick =()=>{

    }
    const ali =()=>{
        alert("شما با موفقیت وارد شدید")
    }
    const refinput = useRef();

    useEffect(() => {
        refinput.current.focus()

    }, [])
    return (
        <div>
       
          <input ref={refinput} placeholder="name" value={name.firstname} onChange={event=>setName({...name,firstname:event.target.value})} />
          <br/>
          <input  value={name.lastname} placeholder="family" onChange={event=>setName({...name,lastname:event.target.value})}/>
          <br/>
          <h1 style={{background:"yellow"}} >name:{name.firstname} family:{name.lastname} </h1>
          <button onClick={handleClick} >click</button>

          {name.firstname==name.lastname ?<p style={{background:"green",padding:"2rem"}}>مقادیر برابر است </p>:<p style={{background:"red",padding:"2rem"}}>مقادیر مشابه نیست</p>}
          {name.firstname=="ali"&&name.lastname=="aliranjbar"?<p style={{background:"green",padding:"2rem"}}> رمز درست بود ولاگین شدی علی {ali()}  </p>:<p style={{background:"red",padding:"2rem"}}>رمز نادرست بود</p>}

        </div>
    );
};

export default Event;
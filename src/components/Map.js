import React, { useState } from 'react';

const Map = () => {
    const[reza,setReza]=useState([]);
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
      ];
    const ali=[
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',img:<img src="F:\all\firstproject\src\components\imges\1.jpg"/> },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com',img:<img src="./imges/1.jpj"/> },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com',img:<img src="./imges/1.jpj"/> },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com',img:<img src="./imges/1.jpj"/> }
    ]
    // const renderTableData=()=>{
    //     ali.map((alir,index)=>{
    //         return (
    //             <tr key={alir.id}>
    //             <td>{alir.id}</td>
    //             <td>{alir.name}</td>
    //             <td>{alir.age}</td>
    //             <td>{alir.email}</td>
    //          </tr>
    //         )
    //     })

    // }
    return (


        <div>
            {ali.map((user,index)=>(
                <div style={{display:"flex", textAlign:"center",justifyContent:"space-around"}} key={index}>
                    <p>{user.img}</p>
                    <p>{user.id}</p>    
                <div>{user.name} </div>
                <h1>{user.age}</h1>
                <p>{user.email}</p>
                </div>
            )
            
            )}

        </div>
    //     <div >
    //     {data.map((user) => (
    //       <div >{user.name}</div>
    //     ))}
    //   </div>
    );
};

export default Map;
import React, { Component ,useRef } from 'react'
import { BrowserRouter,useNavigate } from "react-router-dom";



function AddChallenge(){
    const nav =useNavigate()
    const v1 = useRef('');
    const v2 = useRef('');
    const v3 = useRef('');
    const v4 = useRef('');
    const add =()=>{
        
        const data = {
            "title": v1.current.value,
            "description": v2.current.value,
            "createdAt": v3.current.value,
            "mode":v4.current.value,
            "duration":86400
         
          };
          console.log(data)
        fetch("http://localhost:5000/ChallangeAdd", {
            method: 'POST',
            body: JSON.stringify({
              data
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
          
             .then((data) => {
                nav("/dashbord")
             })
             .catch((err) => {
                console.log(err.message);
             })
        
        
    }
return(
    <div className='container'>
            <h3 className='center'> Add new challange</h3>
            <label>title</label>
            <input type='text' ref={v1} /><br/>
            <label>description</label>
            <input type='text' ref={v2}/><br/>
            <label>createdAt </label>
            <input type='text' ref={v3}/><br/>
            <label>mode</label>
            <input type='text' ref={v4}/><br/>

            <button type="button" class="btn btn-primary" onClick={add}>Add</button>

    </div>
)


}
export default AddChallenge
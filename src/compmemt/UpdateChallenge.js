import React, { Component ,useEffect,useRef ,useState } from 'react'
import { BrowserRouter,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



function UpdateChallenge(){
    const location = useLocation();
    const { data } = location.state;
    const id=data._id
    const [inputValue, setInputValue] = useState(data.title);
    const [inputValue1, setInputValue1] = useState(data.description);
    const [inputValue2, setInputValue2] = useState(data.createdAt);
    const [inputValue3, setInputValue3] = useState(data.mode);
    console.log(data.title)
    const nav =useNavigate()
    const v1 = useRef('');
    const v2 = useRef('');
    const v3 = useRef('');
    const v4 = useRef('');
    
    const update =()=>{
       // console.log('val 1='+ v1.current.value)
        
        const data = {
            "title": v1.current.value,
            "description": v2.current.value,
            "createdAt": v3.current.value,
            "mode":v4.current.value,
          };
          console.log(data)
          fetch(`http://localhost:5000/challangeUpdate/${id}`, {
                method: 'PUT',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                nav('/dashbord')

            })
            .catch((err) => {
                console.log(err.message);
            });
        
        
    }
    function handleChange(event) {
        setInputValue(event.target.value);
      }
      function handleChange1(event) {
        setInputValue1(event.target.value);
      }
      function handleChange2(event) {
        setInputValue2(event.target.value);
      }
      function handleChange3(event) {
        setInputValue3(event.target.value);
      }
    
return(
    <div className='container'>
            <h3 className='center'> update challange</h3> 
            <label>title</label>
            <input type='text' ref={v1} value={inputValue} onChange={handleChange}   /><br/>
            <label>description</label>
            <input type='text' ref={v2} value={inputValue1} onChange={handleChange1}/><br/>
            <label>createdAt</label>
            <input type='text' ref={v3} value={inputValue2} onChange={handleChange2}/> <br/>
            <label>mode</label>
            <input type='text' ref={v4} value={inputValue3} onChange={handleChange3}/> <br/>
            <button type="button" class="btn btn-primary" onClick={update}>update</button>

    </div>
)


}
export default UpdateChallenge
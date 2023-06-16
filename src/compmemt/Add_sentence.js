import React, { Component ,useRef } from 'react'
import { BrowserRouter,useNavigate } from "react-router-dom";



function Addsentence(){
    const nav =useNavigate()
    const v1 = useRef('');
    const v2 = useRef('');
    const v3 = useRef('');
    const v4 = useRef('');
    const v5 = useRef('');
    const add =()=>{
        console.log('val 1='+ v1.current.value)
        
        const data = {
            "sentence_suggestionBefore": v1.current.value,
            "sentence_suggestionAfter": v2.current.value,
            "word1": v3.current.value,
            "word2": v4.current.value,
            "word3": v5.current.value
          };
          console.log(data)
        fetch("http://localhost:5000/sentenceAdd", {
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
            <h3 className='center'> Add new sentence</h3>
            <label>sentence_suggestionBefore</label>
            <input type='text' ref={v1} /><br/>
            <label>sentence_suggestionAfter</label>
            <input type='text' ref={v2}/><br/>
            <label>word 1</label>
            <input type='text' ref={v3}/><br/>
            <label>word 2</label>
            <input type='text' ref={v4}/><br/>
            <label>word 3</label>
            <input type='text' ref={v5}/><br/>
            <button type="button" class="btn btn-primary" onClick={add}>Add</button>

    </div>
)


}
export default Addsentence
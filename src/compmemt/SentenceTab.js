import React, { Component,useEffect,useState } from 'react'
import { BrowserRouter,useNavigate } from "react-router-dom";



function SentenceTab () {
  const nav =useNavigate()
  const [data, setData] = useState([]);
    const move=()=>{
        nav('/addsent')
    }
  useEffect(() => {
 
fetch('http://localhost:5000/sentenceAll')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    setData(data)
    })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  }, []);

    return (
        <div>
            <h1 className='text-center my-5'>sentence table <button type="button" class="btn btn-primary text-center " onClick={move}>ADD</button></h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">sentence suggestion Before</th>
      <th scope="col">sentence_suggestion After</th>
      <th scope="col">word 1</th>
      <th scope="col">word 2</th>
      <th scope="col">word 3</th>
    </tr>
  </thead>
  <tbody>
  {data.map(sent => (
<tr>
<td>{sent.sentence_suggestionBefore}</td>
<td>{sent.sentence_suggestionAfter}</td>
<td>{sent.word1}</td>
<td>{sent.word2}</td>
<td>{sent.word3}</td>

</tr>
      ))}
   
    
  </tbody>
</table>
        </div>
    )
}
export default SentenceTab
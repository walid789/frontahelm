import React, { Component,useEffect,useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from "../file/file1.pdf"
import { BrowserRouter,useNavigate } from "react-router-dom";



function Tab() {

  const pdf=(pdfname)=>{
    const queryString = `param1=${pdfname}`;
    window.open(`/pdf?${queryString}`, '_blank');
}
  const [numPages, setNumPages] = useState(null)
  function onDocumentSuccess ({numPages}) {
  setNumPages (numPages)
  }



  const [data, setData] = useState([]);
  const stylepadge=(st)=>{
      if(st=='PADDING'){
        return <span class="badge bg-primary">PADDING</span>
      }
      if(st=='BLOCKED'){
        return <span class="badge bg-danger">DELETE</span>
      }
      if(st=='APROVED'){
        return <span class="badge bg-success">APROVED</span>
      }
  }


function update1 (id,user,ch){
  user.statut=ch
  console.log(id)
  fetch(`http://localhost:5000/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    user
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      window.location.reload(false);

   })
   .catch((err) => {
      console.log(err.message);
   });
}

  useEffect(() => {
 
fetch('http://localhost:5000/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setData(data)
    })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  }, []);

    return (
        <div> 
          <h1 className='text-center my-4'> the request of user pro</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">age</th>
      <th scope="col">job</th>
      <th scope="col">file</th>
      <th scope="col">statut</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {data.map(user => (

<tr>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.age}</td>
<td>{user.job}</td>
<td>

<button type="button" class="btn btn-primary " onClick={()=>pdf(pdfFile)}>
    <i class="bi bi-download text-light"></i> download
  </button></td>

<td>
  {stylepadge(user.statut)}
   </td>


<td>
  <button type="button" class="btn btn-primary" onClick={() => update1(user._id,user,"APROVED")}>APROVED</button>
<button type="button" class="btn btn-danger" onClick={() => update1(user._id,user,"BLOCKED")}>BLOCKED</button>
</td>
</tr>
      ))}
   
    
  </tbody>
</table>
        </div>
    )
}
export default Tab
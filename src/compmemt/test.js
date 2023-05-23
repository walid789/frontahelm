import React, { useState, useEffect } from 'react';

function Test() {
  const [data, setData] = useState([]);

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
    console.log(data)  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  }, []);

  return (
    <div>
    {data.map(user => (
        <div >{user.name}heoloo</div>
      ))}
      heloo
    </div>
  );
}
export default Test;
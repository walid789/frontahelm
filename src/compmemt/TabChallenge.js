import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from "../file/file1.pdf";
import { BrowserRouter, useNavigate } from "react-router-dom";

function TabChallenge() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/challengeAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(decreaseTime, 1000); // Mettre à jour la durée chaque seconde

    return () => {
      clearInterval(timer); // Nettoyage du timer lors du démontage du composant
    };
  }, []);

  function decreaseTime() {
    setData(prevData => {
      const updatedData = prevData.map(challenge => {
        const hoursInSeconds = challenge.duration * 3600; // Conversion des heures en secondes
        const newDuration = hoursInSeconds > 0 ? hoursInSeconds - 1 : 0; // Diminuer la durée en secondes

        return {
          ...challenge,
          duration: Math.floor(newDuration / 3600) // Convertir la durée de retour en heures
        };
      });
      return updatedData;
    });
  }

  function update2(data) {
    nav('/UpdateChallenge', { state: { data } });
  }

  function add() {
    nav('/addChallenge');
  }
  function formatDuration(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours} h, ${minutes} m, ${seconds} s`;
  }

  function delete1(id) {
    fetch(`http://localhost:5000/ChallangeDelete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <h1 className='text-center my-4 mr-4'> table challange  <button type="button" class="btn btn-primary" onClick={() => add()}>ADD</button></h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">description</th>
            <th scope="col">end time</th>
            <th scope="col">createdAt</th>
            <th scope="col">Mod</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(challenge => (
            <tr key={challenge._id}>
              <td>{challenge.title}</td>
              <td>{challenge.description}</td>
              <td>{formatDuration(challenge.duration)}</td> {/* Durée du challenge */}
              <td>{challenge.createdAt}</td>
              <td>{challenge.mode}</td>
              <td>
                <button type="button" class="btn btn-primary" onClick={() => update2(challenge)}>update</button>
                <button type="button" class="btn btn-danger" onClick={() => delete1(challenge._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabChallenge;

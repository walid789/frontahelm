import React, { Component,useState,useRef } from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
} from 'chart.js';
    import { Bar } from 'react-chartjs-2';
    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale, 
        Tooltip,
        )

function State(){
    const v1 = useRef('');
    const [data1, setData1] = useState([]);
    const getdata =()=>{
        
        const data = {
            "name": v1.current.value,
          };
          console.log(data)
        fetch("http://localhost:5000/getSate", {
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
                
                let valuesArray = Object.values(data[0].data);
                let intArray = valuesArray.map(str => parseInt(str));
                setData1(intArray)
                console.log(intArray)
             })
             .catch((err) => {
                console.log(err.message);
             })
        
        
    }



    const data = {
        labels: ['Monday ', 'Tuesday ', 'Wednesday ','Thursday','Friday ','Saturday ','Sunday '],
        datasets: [
        {
        
        data: data1,
        backgroundColor: 'aqua',
        //borderColor: 'black',
        //borderWidth: 1,
    }]}
        const options = {
        }

        return(
            <div>
                <h1 className='text-center my-4'>le Statistique  </h1><input type='textfiled' class="form-label" ref={v1} /><button type="button" class="btn btn-primary" onClick={getdata}>search</button>
                <div className='row my-4'>
                    <div className='col-2'>
                        <h3><b>5</b> very awsome</h3>
                    </div>
                    <div className='col-2'>
                        <h3><b>5</b> very awsome</h3>
                    </div>
                    <div className='col-2'>
                        <h3><b>5</b> very awsome</h3>
                    </div>
                    <div className='col-2'>
                        <h3><b>5</b> very awsome</h3>
                    </div>
                    <div className='col-2'>
                        <h3><b>5</b> very awsome</h3>
                    </div>
                </div>
                <div style={{
                            width:'90%'
                }}>
                <Bar data={data}
                options={options}
                ></Bar>
                </div>
            </div>
        )
}
export default State
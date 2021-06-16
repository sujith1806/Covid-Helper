import React from 'react'
import './Input.css';
import Statecases from './statecases';
import axios from 'axios';
import {useState,useEffect} from 'react';

function Input() {
  const [statesdata,setStatesdata] = useState([]);

  
  useEffect(()=>{
    axios.get('https://api.covid19india.org/data.json')
        .then(res=>{
          let s = res.data.statewise.slice(1);
          s.splice(30,1);
          setStatesdata(s);
        })
        .catch(err=>{
          console.log(err);
        })
    
  },[]);


    return (
    <div className="Input">
        <h1>Covid-19 Helper</h1>
        <h3>Select Your State</h3>
      <Statecases stats={statesdata} />
     </div>
    )
}

export default Input;

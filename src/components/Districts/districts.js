import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Districtcard from './districtcard';
import './statecases.css'
function Districts({match}) {
 const [districts,setDistricts] = useState([]);
  useEffect(()=>{
      axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${match.params.state_id}`)
        .then(res=>{
            setDistricts(res.data.districts);
        })
        .catch(err=>{
            console.log(err);
        })
        // eslint-disable-next-line
    },[]);
    return (
        <div className="districtdiv">
            <h1>Select Your District for Center Details</h1>
            <div className="distcases">
            {
                districts.map(district => {
                    const rkey = Math.random().toString();
                    return (<Districtcard key={rkey} district={district}/>)
                })
            }
        </div>
        </div>

    )
}

export default Districts

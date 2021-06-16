import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './statecases.css';
import Centerscard from './centerscard';
import  Spinner  from '../gif/Spinner';


function Vaccinecenterdetails({match}) {
    function getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        return today;
    }
  const [centers,setCenters] = useState([]);
  const [filteredata,setFilteredata] = useState([]);
  const [loading,setLoading] = useState(false);
  
  const updateInput = (e) => {
    let value = e.target.value.toLowerCase();
    var filtered = [];
    // eslint-disable-next-line
    filtered=centers.filter(center => {
     if(center.block_name.toLowerCase().includes(value)!==false){
       return center;
     }
     if(value===""){
       return center;
     }

    });
    setFilteredata(filtered);

 }

  useEffect(()=>{
      var d = getDate();
      setLoading(true);
      axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${match.params.dist_id}&date=${d}`)
        .then(res=>{
            setLoading(false);
            if((res.data.sessions)===null){
                setCenters('nothing');
            }
            else{
                setCenters(res.data.sessions);
                setFilteredata(res.data.sessions);
            }
        })
        .catch(err=>{
            console.log(err);
        })
        // eslint-disable-next-line
    },[]);
    if(loading){
        return (<div>
            <h2 style={{color:'white',marginTop:'20vh'}}>Loading ...</h2>
            <Spinner/>
        </div>)
    }
    if(centers === 'nothing')
    {
        return <h1>Sorry No Centers Available!!</h1>
    }
    return (
        <div className="districtdiv">
            <h1>Centers Available</h1>
            <input
                type="text"
                key="kuchbi"
                placeholder="Search by Area"
                onChange={(e) => (updateInput(e))}
            />
            <div className="distcases">
            {
                filteredata.map(center => {
                    const rkey = Math.random().toString();
                    return (<Centerscard key={rkey} center={center}/>)
                })
            }
            </div>
        </div>
    )
}

export default Vaccinecenterdetails;
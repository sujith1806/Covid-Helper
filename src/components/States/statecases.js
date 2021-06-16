import React from 'react';
import Statecard from './statecard';
import './statecases.css';
const Statecases = ({stats}) =>{

    var k=0;
    return(
        <div className='statecases'>
            {
            stats.map(state =>{
                 const rkey = Math.random().toString();
                 k = k+1;
                 return (<Statecard key={rkey} stats={state} state_id={k}/>);
             }
             )
            }
        </div>
    )
}
export default Statecases;
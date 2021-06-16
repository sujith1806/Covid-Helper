import React, { Fragment } from 'react';
import spinner from './gif/load3.gif';
function Spinner  () {
    return (
     <Fragment>
        <img src={spinner} alt="Loading..."
        style={{width:'100px',marginTop:'30vh',display:'block'}}/>
     </Fragment>
    )
}

export default Spinner;

    

import React from 'react';

function formatAMPM(time) {
    var hours = parseInt(time.substr(0,2));
    var minutes = parseInt(time.substr(3,2));
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

let cardStyle={
    textDecoration: 'none', /* no underline */
    display: 'flex',
    width:'100%',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#FFC288', /* fallback for old browsers */
    borderRadius: '10px',
    transition: 'all 1s ease-in-out',
    cursor: 'pointer'
}

let h2style = {
    padding:'4px',
}

let pStyle = {
    fontWeight:'600',
    padding:'4px',
    margin:'7px'
}
function Centerscard({center}) {
    return (
            <div style={cardStyle}>
                <h2 style={h2style}>{center.name}</h2>
                <p style={pStyle}>Vaccines Available : {center.vaccine}</p>
                <p>Area : <b>{center.block_name}</b></p>
                <p>{center.fee_type}</p>
                <p>From {formatAMPM(center.from)} To {formatAMPM(center.to)}</p>
            </div>

    )
}

export default Centerscard;

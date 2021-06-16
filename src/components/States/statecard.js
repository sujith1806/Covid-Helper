import React from 'react';
import './statecard.css'
import changeNumberFormat from './converter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Statecard = ({stats,state_id}) => {
    let cardStyle;
    let h2Style = {
        padding:'5px'
    }

    if(parseInt(stats.confirmed)>800000){
        cardStyle={
            textDecoration: 'none',
            width: '100%',
            display: 'flex',
            flexDirection:'column',
            textAlign: 'center',
            alignItems: 'center',
            backgroundColor: '#DC143C', /* fallback for old browsers */
            color:'white',
            borderRadius: '10px',
            transition: 'all 1s ease-in-out',
            cursor: 'pointer'
        }
    }
    else if(parseInt(stats.confirmed)>500000 && parseInt(stats.confirmed)<800000){
        cardStyle={
            textDecoration: 'none', /* no underline */
            width: '100%',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffed99', /* fallback for old browsers */
            borderRadius: '10px',
            transition: 'all 1s ease-in-out',
            cursor: 'pointer'
        }
    }
    else{
        cardStyle={
            textDecoration: 'none', /* no underline */
            width: '100%',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#8fd9a8', /* fallback for old browsers */
            borderRadius: '10px',
            transition: 'all 1s ease-in-out',
            cursor: 'pointer'
        }
    }
    return (
        <StyledLink to={`/districts/${state_id}`} >
            <div className="statecard" style={cardStyle} onClick={()=>{console.log(state_id)}}>
                <img src="" alt=""/>
                <h2 style={h2Style}>{stats.state}</h2>
                <div className="describe" >
                    <div className="topinfo">
                        <h4>Active : {changeNumberFormat(parseInt(stats.active))}</h4>
                        <h4>Confirmed : {changeNumberFormat(parseInt(stats.confirmed))}</h4>
                    </div>
                    <div className="downinfo">
                        <h4>Deaths : {changeNumberFormat(parseInt(stats.deaths))}</h4>
                        <h4>Recovered : {changeNumberFormat(parseInt(stats.recovered))}</h4>
                    </div>
                </div>
            </div>
        </StyledLink>

    );
};

export default Statecard;
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
function Districtcard({district}) {
    let cardStyle={
        textDecoration: 'none', /* no underline */
        display: 'flex',
        width:'100%',
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: '#8fd9a8', /* fallback for old browsers */
        borderRadius: '10px',
        transition: 'all 1s ease-in-out',
        cursor: 'pointer'
    }
    return (
        <StyledLink to={`/vaccinedetails/${district.district_id}`}>
            <div style={cardStyle}>
                <h2 >{district.district_name}</h2>
            </div>
        </StyledLink>

    )
}

export default Districtcard;

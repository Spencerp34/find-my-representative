import React from 'react';
import { useState } from 'react';
import styled from "styled-components"

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    border: 2px solid;
    border-radius: 15px;
    margin: 10px;
    padding: 5%;
`

const Card = (props) =>{
    const { result } = props;
    const [expanded, setExpanded] = useState(false)

    return(
        <CardDiv>
            <h2>{result.name}</h2>
            <h3>Party affiliation: {result.party}</h3>
            {expanded 
                ? 
                    <div className='extra-info'>
                        <h4>District: {result.district}</h4> 
                        <h4>Phone Number: {result.phone}</h4>
                        <h4>Office: {result.office}</h4>
                        <a target="_blank" rel="noopener noreferrer" href={`${result.link}`} >View their website here</a>
                    </div>
                : 
                    null
            }
            {expanded ? <h5 onClick={() => setExpanded(false)}>See Less ▲</h5>: <h5 onClick={() => setExpanded(true)}>See More ▼</h5>}
        </CardDiv>
    )
} 

export default Card;
import React from 'react';
import styled from "styled-components"
import Card from './Card';

const DisplayDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const RepDisplay = (props) =>{
    const { results } = props;

    return(
        <section className='RepDisplay'>
            <DisplayDiv>
                {results.map((result, idx) => { 
                    return <Card result={result} key={idx} />
                })}
            </DisplayDiv>
        </section>
    )
} 

export default RepDisplay;
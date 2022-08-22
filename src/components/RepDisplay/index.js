import React from 'react';
import Card from './Card';


const RepDisplay = (props) =>{
    const { results } = props;

    return(
        <section className='RepDisplay' style={{display: "flex", flexFlow: "row wrap"}} >
            {results.map((result, idx) => { 
                return <Card result={result} key={idx} />
            })}
        </section>
    )
} 

export default RepDisplay;
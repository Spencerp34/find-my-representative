import React from 'react';
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';

const Card = (props) =>{
    const { result } = props;
    const [expanded, setExpanded] = useState(false)
    const infoStyle = {backgroundColor: expanded ? "#eee" : "transparent", margin: "5px", padding: "2px"}

    return(
        <Grid container spacing={1} sx={{padding: "15px", margin: "20px"}}>
            <Grid item xs={6} sx={{display: "flex", alignItems: "center"}} >
                <Typography>{result.name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <h3>{result.party.charAt(0)}</h3>
            </Grid>
            <Grid item xs={2}>
                {expanded ? <h5 onClick={() => setExpanded(false)}>See Less ▲</h5>: <h5 onClick={() => setExpanded(true)}>See More ▼</h5>}
            </Grid>
            
            {expanded 
                ? 
                    <div className='extra-info'>
                        <Typography sx={infoStyle} >District: {result.district}</Typography> 
                        <Typography sx={infoStyle} >Phone Number: {result.phone}</Typography>
                        <Typography sx={infoStyle} >Office: {result.office}</Typography>
                        <a style={{...infoStyle}} target="_blank" rel="noopener noreferrer" href={`${result.link}`} >View their website here</a>
                    </div>
                : 
                    null
            }
            
        </Grid>
    )
} 

export default Card;
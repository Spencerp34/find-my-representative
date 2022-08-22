import React from 'react';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Button, Alert } from "@mui/material";
import styled from "styled-components"
import states from "./states";
import axios from 'axios';

const FormDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    max-width: 850px;
`

const Form = (props) => {
    const { setResults } = props;
    const [category, setCategory] = useState();
    const [selectedState, setState] = useState();
    const [validationError, setValidationError] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleBtn = () => {
        axios.get(`http://localhost:3000/${category}/${selectedState}`)
            .then( res => {
                console.log(res.data.results)
                setResults(res.data.results)
            })
    }
    
    return(
        <section className="Form">
            <FormDiv>
                <FormControl sx={{width: "300px", margin: "10px"}}>
                <InputLabel>Category</InputLabel>
                <Select label="Category" value={category} onChange={handleCategoryChange} >
                <MenuItem value={"senators"}>Senators</MenuItem>
                <MenuItem value={"representatives"}>Representatives</MenuItem>
                </Select>
                </FormControl>
                <FormControl fullWidth sx={{width: "300px", margin: "10px"}}>
                <InputLabel>State</InputLabel>
                <Select label="State" value={selectedState} onChange={handleStateChange} >
                {states.map((state, idx) =>{
                    return <MenuItem key={idx} value={state.abbreviation}>{state.name}</MenuItem>
                } )}
                </Select>
                </FormControl>
                <Button variant='outlined' sx={{width: "150px", borderRadius: "10px", margin: "10px"}} onClick={handleBtn} >Search</Button>
            </FormDiv>
      </section>
    )
}

export default Form;
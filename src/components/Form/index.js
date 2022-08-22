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
    const [validationError, setValidationError] = useState(false);

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

    const validateBtn = () =>{
        if(category === undefined && selectedState === undefined){
            setValidationError("Please Select Both a Category and the State")
        }else if(category === undefined){
            setValidationError("Please select a Category")
        }else if(selectedState === undefined){
            setValidationError("Please select a State")
        }else{
            setValidationError()
            handleBtn()
        }
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
                <Button variant='outlined' sx={{width: "150px", borderRadius: "10px", margin: "10px"}} onClick={validateBtn} >Search</Button>
            </FormDiv>
            <div className='errorMsg' style={{height: "100px"}}>
                {validationError ? <Alert severity="error">{validationError}</Alert> : null}
            </div>
      </section>
    )
}

export default Form;
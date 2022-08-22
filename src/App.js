import React from 'react';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import states from './components/states';

function App() {
  const [category, setCategory] = useState();
  const [selectedState, setState] = useState();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <FormControl fullWidth sx={{width: "500px", margin: "25px"}}>
          <InputLabel>Category</InputLabel>
        <Select label="Category" value={category} onChange={handleCategoryChange} >
          <MenuItem value={"senators"} >Senators</MenuItem>
          <MenuItem value={"representatives"} >Representatives</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth sx={{width: "500px", margin: "25px"}}>
          <InputLabel>State</InputLabel>
        <Select label="State" value={selectedState} onChange={handleStateChange} >
          {states.map((state, idx) =>{
            return <MenuItem key={idx} value={state.abbreviation}>{state.name}</MenuItem>
          } )}
        </Select>
        </FormControl>
      </header>
    </div>
  );
}

export default App;

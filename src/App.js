import React from 'react';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import states from './components/states';

function App() {
  const [category, setCategory] = useState("Senator");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <FormControl fullWidth sx={{width: "500px", margin: "25px"}}>
          <InputLabel>Category</InputLabel>
        <Select label="Category" value={category} onChange={handleChange} >
          <MenuItem value={"senators"} >Senators</MenuItem>
          <MenuItem value={"representatives"} >Representatives</MenuItem>
        </Select>
        </FormControl>
        {states.map((state, idx) =>{
          return <h5>{state.name}</h5>
        } )}
      </header>
    </div>
  );
}

export default App;

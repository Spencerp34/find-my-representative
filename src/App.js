import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import RepDisplay from './components/RepDisplay';

function App() {
  const [results, setResults] = useState();
  
  return (
    <div className="App" style={{minHeight: "90%", width: "90%", padding: "5%"}}>
      <h1 style={{color: "#53A7ED"}} >Who's My Representative?</h1>
      <Form setResults={setResults} />
      {results ? <h2>List / <span style={{color: "#53a7ed"}} >Representatives</span></h2> : null}
      {results ? <RepDisplay results={results} /> : null}
    </div>
  );
}

export default App;

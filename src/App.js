import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import RepDisplay from './components/RepDisplay';

function App() {
  const [results, setResults] = useState();
  
  return (
    <div className="App" style={{minHeight: "90%", width: "90%", padding: "5%"}}>
      <Form setResults={setResults} />
      {results ? <RepDisplay results={results} /> : null}
    </div>
  );
}

export default App;

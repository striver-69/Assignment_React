import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Results from './components/Results';

const App = () => {
  const [limit,setLimit]=useState(1)
  const [results, setResults] = useState([]);

  console.log(results)
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <button onClick={()=>setLimit(limit+1)}>ADD</button>
      <Results limit={limit} results={results}/>
    </div>
  );
};

export default App;

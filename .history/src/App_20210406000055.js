import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Results from './components/Results';

const App = () => {
  const [limit,setLimit]=useState(1)
  const [results, setResults] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
        limit:limit
      }})
      setResults(request.data)
    }
      const timeoutId=setTimeout(()=>{
        if(limit){
          fetchData()
        }
      },500)
  
      return ()=>{
        clearTimeout(timeoutId)
      }

  },[limit])

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

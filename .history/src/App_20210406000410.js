import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Results from './components/Results';

const App = () => {
  const [limit,setLimit]=useState(0)
  const [results, setResults] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get('https://api.spaceXdata.com/v3/launches',{params:{
        limit:limit
      }})
    }
    console.log(results)
      const timeoutId=setTimeout(()=>{
        if(limit){
          console.log(results)
          fetchData()
        }
      },500)
  
      return ()=>{
        clearTimeout(timeoutId)
      }
      
  },[limit])

  
  return (  
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <button onClick={()=>setLimit(prev=>prev+1)}>ADD</button>
      <Results limit={limit} results={results}/>
    </div>
  );
};

export default App;
